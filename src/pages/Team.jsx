import React from 'react'
import Layout from '../component/Layout'

const Team = () => {
  return (
    <>
    <Layout>
    {/* Start Page Header */}
    <section
      className="cs_page_header position-relative background-filled d-flex align-items-center justify-content-between"
      // data-src="assets/img/page_header_1.jpeg"
      style={{backgroundImage:"url('/assets/img/home/team-bg.png')"}}

    >
      <div className="container position-relative z-index-1">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb text-white cs_fs_18 cs_mb_5">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item active">Team</li>
          </ol>
        </nav>
        <h1 className="cs_fs_48 cs_fs_lg_36 text-white m-0">Team</h1>
      </div>
      <div className="position-absolute end-0 bottom-0">
        <svg
          width={660}
          height={497}
          viewBox="0 0 660 497"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M240 0H660L430 497H0L240 0Z"
            fill="url(#paint0_linear_81_9510)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_81_9510"
              x1={330}
              y1="78.2497"
              x2="375.052"
              y2="780.743"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" stopOpacity={0} offset="none" />
              <stop offset="0.9999" stopColor="#D9D9D9" stopOpacity="0.35" />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
              <stop offset={1} stopColor="#222121" stopOpacity={0} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
    {/* End Page Header */}
    {/* Start Our Latest Project */}
    <section className="cs_pt_100 cs_pt_lg_80 cs_pb_80 cs_pb_lg_80">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Lokesh Dadoo </h2>
                <p className="text-white m-0">Managing Partner</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Ritu Dadoo</h2>
                <p className="text-white m-0">Partner  Finance</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Mayanka Dadu</h2>
                <p className="text-white m-0">Partner - Design & Technical</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Vijay</h2>
                <p className="text-white m-0">Purchase & Admin</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Rakesh</h2>
                <p className="text-white m-0">Mech. Head</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Somesh</h2>
                <p className="text-white m-0">Plumbing Head</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Sanjay</h2>
                <p className="text-white m-0">Electrical Head</p>
              </div>
            </div>
          </div>

          
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <h2 className='team-heading cs_fs_48 cs_fs_lg_36 mb-4'>Project & Field Team</h2>
          </div>
        <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Ashish</h2>
                <p className="text-white m-0">Site Supervision, Material Handling</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Dhanraj</h2>
                <p className="text-white m-0">Dispatches & Maintenance</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Dinesh</h2>
                <p className="text-white m-0">Logistic Support</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="cs_team cs_style_1 text-center cs_mb_25 overflow-hidden cs_rounded_50">
              <div className="cs_team_member position-relative cs_rounded_50">
                <img
                  className="w-100 cs_rounded_50 bg-blackish"
                  src="assets/img/home/team.png"
                  alt="Member"
                />
                {/* <div className="cs_social_btns d-flex flex-wrap cs_column_gap_15 cs_row_gap_15 cs_transition_5 cs_fs_20 cs_fs_lg_18 position-absolute">
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center cs_height_45 cs_width_45 border-0 text-white rounded-circle"
                  >
                    <i className="fa-brands fa-dribbble" />
                  </a>
                </div> */}
              </div>
              <div className="cs_team_info cs_pt_127 cs_pl_15 cs_pr_15 cs_pb_25 cs_transition_4">
                <h2 className="text-white m-0 cs_fs_26 cs_mb_3">Thomas</h2>
                <p className="text-white m-0">Installation & Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* End Our Latest Project */}
    </Layout>
  </>
  
  )
}

export default Team
