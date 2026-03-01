import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const S = {
  page: {
    minHeight: "60vh",
    padding: "24px 0 60px",
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "0 16px",
  },
  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 18,
  },
  topRight: { display: "flex", alignItems: "center", gap: 10 },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(320px, 1fr) minmax(320px, 1.15fr)",
    gap: 22,
    alignItems: "start",
  },
  media: {
    borderRadius: 18,
    overflow: "hidden",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  metaRow: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  priceBox: {
    borderRadius: 18,
    padding: 14,
  },
  priceLine: {
    display: "flex",
    alignItems: "baseline",
    gap: 12,
  },
  desc: {
    borderRadius: 18,
    padding: 14,
  },
  btnRow: { display: "flex", gap: 12, alignItems: "center" },
  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 12,
  },
  block: {
    borderRadius: 18,
    padding: 14,
  },
  reviews: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
  },
  reviewCard: {
    borderRadius: 16,
    padding: 12,
  },
};

function ResponsiveCss() {
  return (
    <style>{`
      @media (max-width: 900px) {
        .ps-layout { grid-template-columns: 1fr !important; }
        .ps-reviews { grid-template-columns: 1fr !important; }
      }
      @media (max-width: 520px) {
        .ps-details { grid-template-columns: 1fr !important; }
      }
    `}</style>
  );
}

export default function ProductSkeleton() {
  return (
    <SkeletonTheme baseColor="#24262b" highlightColor="#343742">
      <ResponsiveCss />

      <section style={S.page}>
        <div style={S.container}>
          <div style={S.topbar}>
            <Skeleton width={180} height={18} />
            <div style={S.topRight}>
              <Skeleton width={70} height={14} />
              <Skeleton width={110} height={28} borderRadius={999} />
            </div>
          </div>
          <div className="ps-layout" style={S.layout}>
            <div>
              <div style={S.media}>
                <Skeleton height={420} />
              </div>
            </div>

            <div style={S.info}>
              <Skeleton height={34} width="85%" />
              <div style={S.metaRow}>
                <Skeleton width={90} height={16} />
                <Skeleton width={12} height={16} />
                <Skeleton width={70} height={16} />
                <Skeleton width={12} height={16} />
                <Skeleton width={110} height={16} />
              </div>

              <div style={S.priceBox}>
                <div style={S.priceLine}>
                  <Skeleton width={120} height={28} />
                  <Skeleton width={90} height={18} />
                </div>
                <Skeleton width={160} height={14} style={{ marginTop: 10 }} />
              </div>

              <div style={S.desc}>
                <Skeleton width={120} height={18} />
                <Skeleton count={3} style={{ marginTop: 10 }} />
              </div>

              <div style={S.btnRow}>
                <Skeleton height={44} width={180} borderRadius={14} />
              </div>

              <div className="ps-details" style={S.detailsGrid}>
                <div style={S.block}>
                  <Skeleton width={70} height={14} />
                  <Skeleton width={120} height={18} style={{ marginTop: 8 }} />
                </div>
                <div style={S.block}>
                  <Skeleton width={90} height={14} />
                  <Skeleton width={140} height={18} style={{ marginTop: 8 }} />
                </div>
                <div style={S.block}>
                  <Skeleton width={80} height={14} />
                  <Skeleton width={120} height={18} style={{ marginTop: 8 }} />
                </div>
                <div style={S.block}>
                  <Skeleton width={60} height={14} />
                  <Skeleton width={110} height={18} style={{ marginTop: 8 }} />
                </div>
              </div>

              <div style={S.block}>
                <Skeleton width={90} height={18} />
                <Skeleton count={4} style={{ marginTop: 10 }} />
              </div>

              <div style={S.block}>
                <Skeleton width={90} height={18} />
                <div
                  className="ps-reviews"
                  style={{ ...S.reviews, marginTop: 12 }}
                >
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} style={S.reviewCard}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          gap: 10,
                        }}
                      >
                        <Skeleton width={120} height={16} />
                        <Skeleton width={44} height={16} />
                      </div>
                      <Skeleton count={2} style={{ marginTop: 10 }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SkeletonTheme>
  );
}
