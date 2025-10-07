import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import "./WorkExperience.css";

export default function WorkExperience() {
  return (
    <section id="work-experience" className="work-mf route py-20">
      <div className="container">
        <div className="row justify-center">
          <div className="col-sm-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="box-shadow-full"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
                <div>
                  <div className="title-box-2 text-center mb-6">
                    <h2 className="title-center">Work Experience</h2>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Mobile Application Developer, Lintcloud — Valliyur
                  </p>
                  <p className="text-gray-500 text-sm flex items-center gap-2 mt-1">
                    <Calendar size={16} /> April 2025 – Present
                  </p>
                </div>

                <div className="flex items-center gap-2 mt-4 md:mt-0 mb-4 text-gray-500 text-sm">
                  <Briefcase size={18} /> Lintcloud
                  <MapPin size={18} /> Valliyur
                </div>
              </div>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="experience-item blue"
                >
                  <p>
                    Developed a comprehensive employee management app (
                    <strong>LINTHR App</strong>) with real-time data where users
                    can check in/out using face authorization, fingerprint, or
                    manual methods, with employee location tracked every 5
                    minutes to ensure they remain within designated areas —
                    efficiently supporting over{" "}
                    <strong>100+ active users</strong> across the organization.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="experience-item green"
                >
                  <p>
                    Built a robust <strong>Leave Management</strong> module,
                    enabling employees to seamlessly apply half-day, full-day,
                    or permission leave, view and edit their leaves, and
                    maintain <strong>100% accurate leave history</strong>{" "}
                    tracking.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="experience-item purple"
                >
                  <p>
                    Implemented advanced <strong>Account Settings</strong>{" "}
                    allowing users to view/edit personal data, add/remove
                    profile photos, switch themes, deactivate accounts, and use
                    face detection verification for secure logins — improving
                    account security by <strong>40%</strong>.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="experience-item orange"
                >
                  <p>
                    Enhanced overall <strong>UI/UX</strong> with onboarding,
                    smooth animations, and glassmorphism design while ensuring
                    responsiveness, resulting in a <strong>30% increase</strong>{" "}
                    in engagement and improved user satisfaction.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
