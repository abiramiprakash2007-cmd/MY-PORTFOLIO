import React, { useState } from 'react';
import { Code2, Eye, BarChart3, Globe, Wrench, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const TechnicalSkills: React.FC = () => {
  const [activeSnippet, setActiveSnippet] = useState<'mediapipe' | 'paddleocr' | 'eda'>('mediapipe');
  const [copiedCode, setCopiedCode] = useState(false);

  const getCategoryIcon = (name: string) => {
    switch (name) {
      case 'AI & Computer Vision':
        return <Eye className="w-5 h-5 text-[#F35A9D]" />;
      case 'Programming Languages':
        return <Code2 className="w-5 h-5 text-[#F7BBD4]" />;
      case 'Data Science & Analytics':
        return <BarChart3 className="w-5 h-5 text-[#F35A9D]" />;
      case 'Web Development':
        return <Globe className="w-5 h-5 text-[#F7BBD4]" />;
      case 'Developer Tools':
        return <Wrench className="w-5 h-5 text-[#F35A9D]" />;
      default:
        return <Code2 className="w-5 h-5 text-[#F35A9D]" />;
    }
  };

  const codeSnippets = {
    mediapipe: `# SignIQ: MediaPipe Hand Landmark Coordinate Extraction
# 21 spatial landmarks tracking 20/26 ASL fingerspelling gestures
import cv2
import mediapipe as mp
import numpy as np

class HandGestureTracker:
    def __init__(self, max_hands=1, detection_conf=0.75):
        self.mp_hands = mp.solutions.hands
        self.hands = self.mp_hands.Hands(
            max_num_hands=max_hands,
            min_detection_confidence=detection_conf
        )
        self.mp_draw = mp.solutions.drawing_utils

    def extract_landmarks(self, frame_bgr):
        frame_rgb = cv2.cvtColor(frame_bgr, cv2.COLOR_BGR2RGB)
        results = self.hands.process(frame_rgb)
        
        landmark_coords = []
        if results.multi_hand_landmarks:
            for hand_lms in results.multi_hand_landmarks:
                for lm in hand_lms.landmark:
                    # Normalized 3D coordinates (x, y, z)
                    landmark_coords.append([lm.x, lm.y, lm.z])
                    
        return np.array(landmark_coords) if landmark_coords else None`,
    paddleocr: `# SIH 2026: Legal Metrology Compliance OCR Checker
# Automated packaged commodity label extraction
from paddleocr import PaddleOCR
import re

class MetrologyComplianceAuditor:
    def __init__(self, lang='en'):
        self.ocr = PaddleOCR(use_angle_cls=True, lang=lang)
        
    def audit_packaging_label(self, image_path):
        results = self.ocr.ocr(image_path, cls=True)
        extracted_text = " ".join([line[1][0] for block in results for line in block])
        
        # Verify statutory declarations (MRP, Mfg Date, Net Qty)
        compliance_report = {
            "mrp_detected": bool(re.search(r'(mrp|rs\.?|inr)\s*[\d,]+', extracted_text, re.I)),
            "mfg_date_detected": bool(re.search(r'(mfg|pkd|date)\s*[:.]?\s*\d{2}/\d{2,4}', extracted_text, re.I)),
            "net_quantity_detected": bool(re.search(r'(net\s*wt|quantity|qty)\s*[:.]?\s*\d+\s*(g|kg|ml|l)', extracted_text, re.I))
        }
        return compliance_report`,
    eda: `# NetSentinel: Network Traffic Telemetry & Correlation
# Anomaly detection feature engineering via Pandas
import pandas as pd
import numpy as np

def analyze_packet_telemetry(pcap_csv_path):
    df = pd.read_csv(pcap_csv_path)
    df.dropna(subset=['flow_duration', 'packet_count'], inplace=True)
    
    # Feature engineering: Bytes per packet ratio
    df['bytes_per_pkt'] = df['total_bytes'] / (df['packet_count'] + 1e-5)
    
    # Spearman rank correlation matrix for threat identification
    corr_matrix = df[['flow_duration', 'packet_count', 'bytes_per_pkt', 'flag_syn']].corr(method='spearman')
    return corr_matrix`,
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeSnippet]);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-20 sm:py-28 relative" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#252731] border border-white/10 text-xs font-mono text-[#F7BBD4] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
            <span>02 · Technical Toolkit</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#F8F4F7] tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#B8B4C0] leading-relaxed">
            Organized across core disciplines: AI & Computer Vision, Programming Languages, Data Science, Web Development, and Developer Tools.
          </p>
        </div>

        {/* Row of Dark Cards (Similar to Creative Agency Service Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {skillCategories.map((category, idx) => (
            <div
              key={category.categoryName}
              className="card-dark p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                {/* Category Top Bar */}
                <div className="flex items-center justify-between mb-5 pb-3 border-b border-white/10">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white group-hover:border-[#F35A9D]/50 transition-colors">
                    {getCategoryIcon(category.categoryName)}
                  </div>
                  <span className="font-mono text-xs text-[#F7BBD4]">
                    0{idx + 1} / 05
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-normal text-white mb-2">
                  {category.categoryName}
                </h3>
                <p className="text-xs text-[#B8B4C0] mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Skills Badges */}
                <div className="space-y-2.5">
                  {category.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#171719] border border-white/5 flex items-center justify-between hover:border-[#F35A9D]/30 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F35A9D]" />
                        <span className="text-xs sm:text-sm font-semibold text-white">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-[#F7BBD4]">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Code Terminal in Dark Charcoal and Pink */}
        <div className="card-dark overflow-hidden border border-white/15 shadow-2xl">
          {/* Terminal Title Bar */}
          <div className="bg-[#171719] px-5 sm:px-7 py-4 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-xs text-[#B8B4C0] hidden sm:inline-block pl-2 border-l border-white/10">
                abirami_pipeline.py
              </span>
            </div>

            {/* Code Selector Tabs */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveSnippet('mediapipe')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activeSnippet === 'mediapipe'
                    ? 'bg-[#F35A9D] text-white font-semibold'
                    : 'text-[#B8B4C0] hover:text-white bg-white/5'
                }`}
              >
                SignIQ (MediaPipe)
              </button>
              <button
                onClick={() => setActiveSnippet('paddleocr')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activeSnippet === 'paddleocr'
                    ? 'bg-[#F35A9D] text-white font-semibold'
                    : 'text-[#B8B4C0] hover:text-white bg-white/5'
                }`}
              >
                SIH 2026 (PaddleOCR)
              </button>
              <button
                onClick={() => setActiveSnippet('eda')}
                className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                  activeSnippet === 'eda'
                    ? 'bg-[#F35A9D] text-white font-semibold'
                    : 'text-[#B8B4C0] hover:text-white bg-white/5'
                }`}
              >
                NetSentinel (EDA)
              </button>

              <button
                onClick={handleCopyCode}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#B8B4C0] hover:text-white border border-white/10 transition-colors ml-1 cursor-pointer"
                title="Copy code snippet"
              >
                {copiedCode ? <Check className="w-3.5 h-3.5 text-[#F35A9D]" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          {/* Terminal Code Body */}
          <div className="bg-[#131316] p-5 sm:p-7 overflow-x-auto text-xs sm:text-[13px] font-mono leading-relaxed text-[#F8F4F7]">
            <pre className="font-mono leading-relaxed">
              <code>{codeSnippets[activeSnippet]}</code>
            </pre>
          </div>

          {/* Terminal Footer */}
          <div className="bg-[#171719] px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs text-[#B8B4C0] font-mono">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F35A9D]" />
              <span>Clean, modular, documented Python implementations</span>
            </span>
            <span className="text-[#F7BBD4]">REVA University Lab Verified</span>
          </div>
        </div>

      </div>
    </section>
  );
};
