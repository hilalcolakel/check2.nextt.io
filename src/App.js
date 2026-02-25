import { useState } from "react";

const LOGO_BASE64 =
  "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";

// ─── Translations ───────────────────────────────────────────────
const T = {
  TR: {
    progressTitle: "İLERLEME DURUMU",
    progressLabel: "İlerleme",
    continueBtn: "Devam Et",
    backBtn: "Geri Dön",
    submitBtn: "Gönder",
    steps: [
      {
        title: "İletişim Bilgileri",
        description: "Lütfen iletişim bilgilerinizi doldurun.",
      },
      {
        title: "Şirket Profili",
        description: "Şirketinizin genel yapısı hakkında bilgi verin.",
      },
      {
        title: "Organizasyon",
        description: "Organizasyon yapınız hakkında bilgi verin.",
      },
      {
        title: "Performans",
        description: "Performans yönetimi süreçleriniz hakkında bilgi verin.",
      },
      {
        title: "İK Süreçleri",
        description: "İnsan kaynakları süreçleriniz hakkında bilgi verin.",
      },
      {
        title: "Dijitalleşme",
        description: "İK dijitalleşme durumunuz hakkında bilgi verin.",
      },
    ],
    fields: {
      companyName: "Şirket Adı",
      sector: "Sektörünüz",
      firstName: "Adınız",
      lastName: "Soyadınız",
      position: "Pozisyon / Görev / Rol",
      email: "Şirket E-posta Adresiniz",
      phone: "İletişim Numaranız",
      kvkk: "KVKK Onayı",
      kvkkText: "KVKK Aydınlatma Metni",
      kvkkSuffix: "'ni okudum ve kabul ediyorum.",
      companyCount: "Şirket Sayısı (Grup/Tekil)",
      totalPersonnel: "Toplam Personel Sayısı",
      locations: "Yerleşim Yeri (Lokasyon) Sayısı",
      whiteCollar: "Beyaz Yaka Sayısı / Oranı",
      blueCollar: "Mavi Yaka Sayısı / Oranı",
      departments: "Mevcut Departman Sayısı",
      managers: "Yönetici Sayısı (Müdür ve Üzeri)",
      seniority: "Ortalama Çalışan Kıdemi ve Yaş Ortalaması",
      orgChart: "Güncel Organizasyon Şeması var mı?",
      normKadro: "Norm Kadro çalışması yapılıyor mu?",
      jobDesc: "Tüm pozisyonlar için güncel İş Tanımları var mı?",
      successionPlan: "Kritik roller için Yedekleme Planı var mı?",
      perfSystem: "Aktif bir Performans Yönetim Sistemi var mı?",
      perfBase: "Performans Temeli (Hedef / Yetkinlik / Hibrit)?",
      competencySet: "Tanımlanmış bir Yetkinlik Seti mevcut mu?",
      gapAnalysis: "Yetkinlik Analizi (Gap Analysis) yapıldı mı?",
      evalFreq: "Değerlendirme Sıklığı (Yılda kaç kez)?",
      perfGuideline: "Performans Değerlendirme Yönergesi var mı?",
      perfPayLink: "Performans sonuçları Ücret/Prim ile entegre mi?",
      hrHandbook: "Personel Yönetim Yönergesi / El Kitabı var mı?",
      recruitProc: "Standart bir İşe Alım Prosedürü var mı?",
      trainingNeeds: "Eğitim İhtiyaç Analizi yapılıyor mu?",
      disciplineBoard: "Disiplin Yönetmeliği ve Kurulu mevcut mu?",
      hrSoftware: "İK süreçleri bir Yazılım üzerinden mi yürütülüyor?",
      hrMetrics: "İK Metrikleri (Turnover vb.) raporlanıyor mu?",
      kvkkHr: "KVKK süreçleri İK tarafından tamamlandı mı?",
    },
    placeholders: {
      companyName: "Şirket adınızı giriniz",
      sector: "Faaliyet gösterdiğiniz sektör",
      firstName: "Adınız",
      lastName: "Soyadınız",
      position: "Şirketteki pozisyonunuz",
      email: "ornek@sirket.com",
      phone: "5XX XXX XX XX",
      companyCount: "Örn: 1",
      totalPersonnel: "Örn: 150",
      locations: "Örn: 3",
      whiteCollar: "Örn: 50 kişi veya %30",
      blueCollar: "Örn: 100 kişi veya %70",
      departments: "Örn: 8",
      managers: "Örn: 12",
      seniority: "Örn: 5 yıl, 35 yaş",
      perfBase: "Örn: Hibrit",
      evalFreq: "Örn: 2",
    },
    yes: "Evet",
    no: "Hayır",
    required: "Bu alan zorunludur.",
    emailInvalid: "Geçerli bir e-posta adresi girin.",
    selectOption: "Lütfen bir seçenek seçin.",
    successTitle: "Teşekkür Ederiz!",
    successSub: "Formunuz başarıyla gönderildi.",
    successBody: "Ekibimiz en kısa sürede sizinle iletişime geçecektir.",
    successTime: "Tahmini süre: 48 saat içinde",
    successFooter:
      "Kurumsal olgunluk değerlendirmeniz ve diğer çözümlerimizi keşfetmek için",
    successBtn: "Tamam",
  },
  EN: {
    progressTitle: "PROGRESS STATUS",
    progressLabel: "Progress",
    continueBtn: "Continue",
    backBtn: "Go Back",
    submitBtn: "Submit",
    steps: [
      {
        title: "Contact Information",
        description: "Please fill in your contact information.",
      },
      {
        title: "Company Profile",
        description: "Provide information about your company.",
      },
      {
        title: "Organization",
        description: "Provide information about your organizational structure.",
      },
      {
        title: "Performance",
        description: "Provide information about your performance management.",
      },
      {
        title: "HR Processes",
        description: "Provide information about your HR processes.",
      },
      {
        title: "Digitalization",
        description: "Provide information about your HR digitalization.",
      },
    ],
    fields: {
      companyName: "Company Name",
      sector: "Your Sector",
      firstName: "First Name",
      lastName: "Last Name",
      position: "Position / Role",
      email: "Company Email",
      phone: "Phone Number",
      kvkk: "GDPR Consent",
      kvkkText: "Privacy Notice",
      kvkkSuffix: " — I have read and accept.",
      companyCount: "Number of Companies (Group/Single)",
      totalPersonnel: "Total Headcount",
      locations: "Number of Locations",
      whiteCollar: "White Collar Count / Ratio",
      blueCollar: "Blue Collar Count / Ratio",
      departments: "Number of Departments",
      managers: "Number of Managers (Director+)",
      seniority: "Avg. Employee Tenure & Age",
      orgChart: "Is there an up-to-date Org Chart?",
      normKadro: "Is headcount planning being done?",
      jobDesc: "Are there updated Job Descriptions for all roles?",
      successionPlan: "Is there a Succession Plan for critical roles?",
      perfSystem: "Is there an active Performance Management System?",
      perfBase: "Performance Basis (Goal / Competency / Hybrid)?",
      competencySet: "Is there a defined Competency Framework?",
      gapAnalysis: "Has a Competency Gap Analysis been conducted?",
      evalFreq: "Evaluation Frequency (How many times/year)?",
      perfGuideline: "Is there a Performance Evaluation Guideline?",
      perfPayLink: "Are performance results linked to compensation?",
      hrHandbook: "Is there a Personnel Management Policy / Handbook?",
      recruitProc: "Is there a Standard Recruitment Procedure?",
      trainingNeeds: "Is a Training Needs Analysis being conducted?",
      disciplineBoard: "Is there a Disciplinary Policy and Committee?",
      hrSoftware: "Are HR processes managed through software?",
      hrMetrics: "Are HR Metrics (Turnover etc.) being reported?",
      kvkkHr: "Have GDPR processes been completed by HR?",
    },
    placeholders: {
      companyName: "Enter your company name",
      sector: "Your industry / sector",
      firstName: "First name",
      lastName: "Last name",
      position: "Your role at the company",
      email: "example@company.com",
      phone: "5XX XXX XX XX",
      companyCount: "e.g. 1",
      totalPersonnel: "e.g. 150",
      locations: "e.g. 3",
      whiteCollar: "e.g. 50 people or 30%",
      blueCollar: "e.g. 100 people or 70%",
      departments: "e.g. 8",
      managers: "e.g. 12",
      seniority: "e.g. 5 years, 35 avg age",
      perfBase: "e.g. Hybrid",
      evalFreq: "e.g. 2",
    },
    yes: "Yes",
    no: "No",
    required: "This field is required.",
    emailInvalid: "Please enter a valid email address.",
    selectOption: "Please select an option.",
    successTitle: "Thank You!",
    successSub: "Your form has been submitted successfully.",
    successBody: "Our team will get in touch with you shortly.",
    successTime: "Estimated time: within 48 hours",
    successFooter:
      "To explore your organizational maturity and other solutions",
    successBtn: "Done",
  },
};

const STEPS_COUNT = 6;
const PCT_MAP = { 1: 24, 2: 24, 3: 47, 4: 59, 5: 79, 6: 91 };

// ─── Components ──────────────────────────────────────────────────

function StepItem({ index, currentStep, completedSteps, t }) {
  const stepNum = index + 1;
  const isActive = stepNum === currentStep;
  const isCompleted = completedSteps.includes(stepNum);
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all ${
        isActive ? "bg-black text-white" : "text-gray-500 hover:bg-gray-50"
      }`}
    >
      <div
        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold flex-shrink-0 ${
          isCompleted
            ? "bg-black text-white"
            : isActive
            ? "bg-white text-black"
            : "border border-gray-300 text-gray-400"
        }`}
      >
        {isCompleted ? (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          stepNum
        )}
      </div>
      <span
        className={`text-sm font-medium ${
          isActive
            ? "text-white"
            : isCompleted
            ? "text-gray-700"
            : "text-gray-500"
        }`}
      >
        {t.steps[index].title}
      </span>
    </div>
  );
}

function StepSidebar({ currentStep, completedSteps, t }) {
  const pct = PCT_MAP[currentStep] ?? 0;
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 w-full">
      <p className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-3 px-3">
        {t.progressTitle}
      </p>
      <div className="space-y-1">
        {Array.from({ length: STEPS_COUNT }).map((_, i) => (
          <StepItem
            key={i}
            index={i}
            currentStep={currentStep}
            completedSteps={completedSteps}
            t={t}
          />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">{t.progressLabel}</span>
          <span className="text-xs font-semibold text-gray-800">{pct}%</span>
        </div>
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black rounded-full transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <div className="text-center mt-2 text-xs text-gray-400">
          {currentStep} / {STEPS_COUNT}
        </div>
      </div>
    </div>
  );
}

function TextField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} <span className="text-gray-400 text-xs">?</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 rounded-md border text-sm bg-white outline-none transition-all ${
          error
            ? "border-red-400 focus:border-red-500"
            : "border-gray-200 focus:border-gray-800"
        }`}
        style={{ height: "36px" }}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function PhoneField({ label, value, onChange, error, placeholder }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">
        {label} <span className="text-gray-400 text-xs">?</span>
      </label>
      <div
        className={`flex rounded-md border overflow-hidden transition-all ${
          error
            ? "border-red-400"
            : "border-gray-200 focus-within:border-gray-800"
        }`}
      >
        <div className="flex items-center gap-1 px-2 py-1 border-r border-gray-200 bg-white select-none">
          <span className="text-sm">🇹🇷</span>
          <span className="text-xs text-gray-700">+90</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            className="text-gray-400 ml-0.5"
          >
            <path
              d="M2 4l4 4 4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <input
          type="tel"
          value={value}
          onChange={(e) => onChange("phone", e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2 text-sm outline-none bg-white"
        />
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function CheckboxField({
  label,
  kvkkText,
  kvkkSuffix,
  name,
  checked,
  onChange,
  error,
}) {
  return (
    <div>
      <p className="block text-xs font-medium text-gray-600 mb-2">
        {label} <span className="text-gray-400 text-xs">?</span>
      </p>
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(name, e.target.checked)}
          className="mt-0.5 w-4 h-4 rounded border-gray-300 accent-black cursor-pointer"
        />
        <span className="text-sm text-gray-600">
          <span className="text-black underline cursor-pointer">
            {kvkkText}
          </span>
          {kvkkSuffix}
        </span>
      </label>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function YesNoField({ label, name, value, onChange, error, yes, no }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-2">
        {label} <span className="text-gray-400 text-xs">?</span>
      </label>
      <div className="grid grid-cols-2 gap-2">
        {[yes, no].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(name, opt)}
            className={`py-2 rounded-md border text-sm font-medium transition-all ${
              value === opt
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

// ─── Step Forms ───────────────────────────────────────────────────

function Step1Form({ data, errors, onChange, t }) {
  const f = t.fields;
  const p = t.placeholders;
  return (
    <div className="space-y-4">
      <TextField
        label={f.companyName}
        name="companyName"
        value={data.companyName || ""}
        onChange={onChange}
        error={errors.companyName}
        placeholder={p.companyName}
      />
      <TextField
        label={f.sector}
        name="sector"
        value={data.sector || ""}
        onChange={onChange}
        error={errors.sector}
        placeholder={p.sector}
      />
      <div className="grid grid-cols-2 gap-4">
        <TextField
          label={f.firstName}
          name="firstName"
          value={data.firstName || ""}
          onChange={onChange}
          error={errors.firstName}
          placeholder={p.firstName}
        />
        <TextField
          label={f.lastName}
          name="lastName"
          value={data.lastName || ""}
          onChange={onChange}
          error={errors.lastName}
          placeholder={p.lastName}
        />
      </div>
      <TextField
        label={f.position}
        name="position"
        value={data.position || ""}
        onChange={onChange}
        error={errors.position}
        placeholder={p.position}
      />
      <TextField
        label={f.email}
        name="email"
        type="email"
        value={data.email || ""}
        onChange={onChange}
        error={errors.email}
        placeholder={p.email}
      />
      <PhoneField
        label={f.phone}
        value={data.phone || ""}
        onChange={onChange}
        error={errors.phone}
        placeholder={p.phone}
      />
      <CheckboxField
        label={f.kvkk}
        kvkkText={f.kvkkText}
        kvkkSuffix={f.kvkkSuffix}
        name="kvkk"
        checked={data.kvkk || false}
        onChange={onChange}
        error={errors.kvkk}
      />
    </div>
  );
}

function Step2Form({ data, errors, onChange, t }) {
  const f = t.fields;
  const p = t.placeholders;
  return (
    <div className="space-y-4">
      <TextField
        label={f.companyCount}
        name="companyCount"
        value={data.companyCount || ""}
        onChange={onChange}
        error={errors.companyCount}
        placeholder={p.companyCount}
      />
      <TextField
        label={f.totalPersonnel}
        name="totalPersonnel"
        value={data.totalPersonnel || ""}
        onChange={onChange}
        error={errors.totalPersonnel}
        placeholder={p.totalPersonnel}
      />
      <TextField
        label={f.locations}
        name="locations"
        value={data.locations || ""}
        onChange={onChange}
        error={errors.locations}
        placeholder={p.locations}
      />
      <TextField
        label={f.whiteCollar}
        name="whiteCollar"
        value={data.whiteCollar || ""}
        onChange={onChange}
        error={errors.whiteCollar}
        placeholder={p.whiteCollar}
      />
      <TextField
        label={f.blueCollar}
        name="blueCollar"
        value={data.blueCollar || ""}
        onChange={onChange}
        error={errors.blueCollar}
        placeholder={p.blueCollar}
      />
      <TextField
        label={f.departments}
        name="departments"
        value={data.departments || ""}
        onChange={onChange}
        error={errors.departments}
        placeholder={p.departments}
      />
      <TextField
        label={f.managers}
        name="managers"
        value={data.managers || ""}
        onChange={onChange}
        error={errors.managers}
        placeholder={p.managers}
      />
      <TextField
        label={f.seniority}
        name="seniority"
        value={data.seniority || ""}
        onChange={onChange}
        error={errors.seniority}
        placeholder={p.seniority}
      />
    </div>
  );
}

function Step3Form({ data, errors, onChange, t }) {
  const f = t.fields;
  return (
    <div className="space-y-5">
      {["orgChart", "normKadro", "jobDesc", "successionPlan"].map((name) => (
        <YesNoField
          key={name}
          label={f[name]}
          name={name}
          value={data[name]}
          onChange={onChange}
          error={errors[name]}
          yes={t.yes}
          no={t.no}
        />
      ))}
    </div>
  );
}

function Step4Form({ data, errors, onChange, t }) {
  const f = t.fields;
  const p = t.placeholders;
  return (
    <div className="space-y-5">
      <YesNoField
        label={f.perfSystem}
        name="perfSystem"
        value={data.perfSystem}
        onChange={onChange}
        error={errors.perfSystem}
        yes={t.yes}
        no={t.no}
      />
      <TextField
        label={f.perfBase}
        name="perfBase"
        value={data.perfBase || ""}
        onChange={onChange}
        error={errors.perfBase}
        placeholder={p.perfBase}
      />
      <YesNoField
        label={f.competencySet}
        name="competencySet"
        value={data.competencySet}
        onChange={onChange}
        error={errors.competencySet}
        yes={t.yes}
        no={t.no}
      />
      <YesNoField
        label={f.gapAnalysis}
        name="gapAnalysis"
        value={data.gapAnalysis}
        onChange={onChange}
        error={errors.gapAnalysis}
        yes={t.yes}
        no={t.no}
      />
      <TextField
        label={f.evalFreq}
        name="evalFreq"
        value={data.evalFreq || ""}
        onChange={onChange}
        error={errors.evalFreq}
        placeholder={p.evalFreq}
      />
      <YesNoField
        label={f.perfGuideline}
        name="perfGuideline"
        value={data.perfGuideline}
        onChange={onChange}
        error={errors.perfGuideline}
        yes={t.yes}
        no={t.no}
      />
      <YesNoField
        label={f.perfPayLink}
        name="perfPayLink"
        value={data.perfPayLink}
        onChange={onChange}
        error={errors.perfPayLink}
        yes={t.yes}
        no={t.no}
      />
    </div>
  );
}

function Step5Form({ data, errors, onChange, t }) {
  const f = t.fields;
  return (
    <div className="space-y-5">
      {["hrHandbook", "recruitProc", "trainingNeeds", "disciplineBoard"].map(
        (name) => (
          <YesNoField
            key={name}
            label={f[name]}
            name={name}
            value={data[name]}
            onChange={onChange}
            error={errors[name]}
            yes={t.yes}
            no={t.no}
          />
        )
      )}
    </div>
  );
}

function Step6Form({ data, errors, onChange, t }) {
  const f = t.fields;
  return (
    <div className="space-y-5">
      {["hrSoftware", "hrMetrics", "kvkkHr"].map((name) => (
        <YesNoField
          key={name}
          label={f[name]}
          name={name}
          value={data[name]}
          onChange={onChange}
          error={errors[name]}
          yes={t.yes}
          no={t.no}
        />
      ))}
    </div>
  );
}

const stepForms = [
  Step1Form,
  Step2Form,
  Step3Form,
  Step4Form,
  Step5Form,
  Step6Form,
];

// ─── Validation ───────────────────────────────────────────────────
function validateStep(stepId, data, t) {
  const errors = {};
  const req = t.required;
  const selOpt = t.selectOption;

  if (stepId === 1) {
    ["companyName", "sector", "firstName", "lastName", "position"].forEach(
      (f) => {
        if (!data[f]?.trim()) errors[f] = req;
      }
    );
    if (!data.email?.trim()) errors.email = req;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      errors.email = t.emailInvalid;
    if (!data.phone?.trim()) errors.phone = req;
    if (!data.kvkk) errors.kvkk = req;
  }
  if (stepId === 2) {
    [
      "companyCount",
      "totalPersonnel",
      "locations",
      "whiteCollar",
      "blueCollar",
      "departments",
      "managers",
      "seniority",
    ].forEach((f) => {
      if (!data[f]?.trim()) errors[f] = req;
    });
  }
  if (stepId === 3) {
    ["orgChart", "normKadro", "jobDesc", "successionPlan"].forEach((f) => {
      if (!data[f]) errors[f] = selOpt;
    });
  }
  if (stepId === 4) {
    [
      "perfSystem",
      "competencySet",
      "gapAnalysis",
      "perfGuideline",
      "perfPayLink",
    ].forEach((f) => {
      if (!data[f]) errors[f] = selOpt;
    });
    if (!data.perfBase?.trim()) errors.perfBase = req;
    if (!data.evalFreq?.trim()) errors.evalFreq = req;
  }
  if (stepId === 5) {
    ["hrHandbook", "recruitProc", "trainingNeeds", "disciplineBoard"].forEach(
      (f) => {
        if (!data[f]) errors[f] = selOpt;
      }
    );
  }
  if (stepId === 6) {
    ["hrSoftware", "hrMetrics", "kvkkHr"].forEach((f) => {
      if (!data[f]) errors[f] = selOpt;
    });
  }
  return errors;
}

// ─── Success Modal ────────────────────────────────────────────────
function SuccessModal({ onClose, t }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center">
        <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center mx-auto mb-5">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="black"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          {t.successTitle}
        </h2>
        <p className="text-sm text-gray-500 mb-4">{t.successSub}</p>
        <div className="bg-gray-50 rounded-xl p-4 mb-5 text-sm text-gray-500">
          <p>{t.successBody}</p>
          <p className="mt-1">{t.successTime}</p>
        </div>
        <p className="text-xs text-gray-400 mb-1">{t.successFooter}</p>
        <p className="text-sm font-bold text-black mb-5">ukxperience.com</p>
        <button
          onClick={onClose}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
        >
          {t.successBtn}
        </button>
      </div>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────
export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [lang, setLang] = useState("TR");

  const t = T[lang];
  const stepInfo = t.steps[currentStep - 1];
  const CurrentForm = stepForms[currentStep - 1];

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
  };

  const handleNext = () => {
    const errs = validateStep(currentStep, formData, t);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setCompletedSteps((prev) =>
      prev.includes(currentStep) ? prev : [...prev, currentStep]
    );
    if (currentStep === 6) {
      setShowSuccess(true);
      return;
    }
    setCurrentStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setCurrentStep((s) => s - 1);
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "white",
          borderBottom: "1px solid #e5e7eb",
          padding: "12px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <img
          src={`data:image/jpeg;base64,${LOGO_BASE64}`}
          alt="UKx Logo"
          style={{ height: "64px", width: "auto" }}
        />
        <div className="flex items-center gap-1 text-sm font-medium">
          <button
            onClick={() => setLang("TR")}
            className={`px-2 py-1 rounded transition-all ${
              lang === "TR"
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            TR
          </button>
          <span className="text-gray-300">/</span>
          <button
            onClick={() => setLang("EN")}
            className={`px-2 py-1 rounded transition-all ${
              lang === "EN"
                ? "text-black font-bold"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            EN
          </button>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-4xl mx-auto px-4 pb-12 pt-4">
        <div className="flex flex-col md:flex-row gap-4 items-start">
          <div className="w-full md:w-56 flex-shrink-0">
            <StepSidebar
              currentStep={currentStep}
              completedSteps={completedSteps}
              t={t}
            />
          </div>
          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">
                {stepInfo.title}
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                {stepInfo.description}
              </p>
            </div>
            <div className="mb-6">
              <CurrentForm
                data={formData}
                errors={errors}
                onChange={handleChange}
                t={t}
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                {currentStep > 1 && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900 transition-all"
                  >
                    {t.backBtn}
                  </button>
                )}
              </div>
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-lg text-sm font-semibold bg-black text-white hover:bg-gray-800 active:scale-95 transition-all"
              >
                {currentStep === 6 ? t.submitBtn : t.continueBtn}
              </button>
            </div>
          </div>
        </div>
      </main>

      {showSuccess && (
        <SuccessModal onClose={() => setShowSuccess(false)} t={t} />
      )}
    </div>
  );
}
