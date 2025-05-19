import React from "react";

const StatsSection: React.FC = () => {
  return (
    <ul
      className="flex flex-wrap px-m items-start justify-between gap-y-l py-[40px] md:px-[40px] md:py-0 md:w-10/12 mx-auto"
      style={{ transform: "none", opacity: 1 }}
    >
      {/* Item 1 */}
      <li className="flex flex-1 basis-1/2 md:basis-1/3 justify-center pt-l pb-[30px]">
        <div className="flex flex-col items-center">
          <span
            style={{ width: 80, height: 80 }}
            className="leading-[0] svg-icon stroke-gold"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={80}
              viewBox="0 0 24 24"
              fill="#ccb073"
              className="stroke-inherit"
              role="img"
            >
              <g clipPath="url(#clip0_6_2593)">
                <path
                  d="M5.67566 12.15L3.57488 17.1383L3.16566 18.11H4.22H7.58C10.2033 18.11 11.7928 17.9217 13.3477 17.1835C14.282 16.7487 14.9231 16.0463 15.4175 15.2544C15.876 14.5201 16.2319 13.6676 16.5754 12.8447C16.5956 12.7964 16.6157 12.7481 16.6358 12.7C17.3048 11.1006 17.4646 9.57945 16.6912 8.43543C15.9198 7.29439 14.4158 6.81997 12.49 6.81997H6.26649L6.63823 5.91997H16.73C19.7906 5.91997 21.6438 6.55868 22.5661 7.59419C23.4404 8.58539 23.605 10.0378 22.694 12.2203C22.1259 13.5799 21.2466 14.83 20.0507 15.9698C18.765 17.16 17.3256 18.0054 15.718 18.5228C14.2546 18.9821 12.2154 19.23 9.57 19.23H1.05305L4.02531 12.15H5.67566Z"
                  stroke="#ccb073"
                  strokeWidth={1.4}
                />
              </g>
              <defs>
                <clipPath id="clip0_6_2593">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <p className="font-bold text-center font-primary text-l md:text-3xl mb-0 mt-s pt-3xs text-black py-1">
            Est. 2002
          </p>
          <p className="text-center font-secondary mt-[2px] px-s md:px-0 text-m font-secondary-light text-black">
            In Dubai, UAE
          </p>
        </div>
      </li>

      {/* Item 2 */}
      <li className="flex flex-1 basis-1/2 md:basis-1/3 justify-center pt-l">
        <div className="flex flex-col items-center">
          <span
            style={{ width: 80, height: 80 }}
            className="leading-[0] svg-icon stroke-gold"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={80}
              viewBox="0 0 24 24"
              fill="#ccb073"
              className="stroke-inherit"
              role="img"
            >
              <path
                d="M20.6158 10.2626L12.7408 3.28199C12.3167 2.90601 11.6833 2.906 11.2592 3.28199L3.38418 10.2626C3.14004 10.479 3 10.7916 3 11.1203V19.8603C3 20.4897 3.50368 21 4.125 21H8.625C9.24632 21 9.75 20.4897 9.75 19.8603V15.3016C9.75 14.6721 10.2537 14.1619 10.875 14.1619H13.125C13.7463 14.1619 14.25 14.6721 14.25 15.3016V19.8603C14.25 20.4897 14.7537 21 15.375 21H19.875C20.4963 21 21 20.4897 21 19.8603V11.1203C21 10.7916 20.86 10.479 20.6158 10.2626Z"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="font-bold text-center font-primary text-l md:text-3xl mb-0 mt-s pt-3xs text-black py-1">
            48,000+
          </p>
          <p className="text-center font-secondary mt-[2px] px-s md:px-0 text-m font-secondary-light text-black">
            Homes delivered*
          </p>
        </div>
      </li>

      {/* Item 3 */}
      <li className="flex flex-1 basis-1/2 md:basis-1/3 justify-center pt-l">
        <div className="flex flex-col items-center">
          <span
            style={{ width: 80, height: 80 }}
            className="leading-[0] svg-icon stroke-gold"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={80}
              viewBox="0 0 26 25"
              fill="none"
              className="stroke-inherit"
              role="img"
            >
              <path
                d="M1 24H25"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.30469 24H17.696V5H8.30469V24Z"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.7812 24H23.9552V14H19.7812V24Z"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.04297 24H6.21688V14H2.04297V24Z"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.17578 14V13"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.8242 14V13"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.9988 3V1M11.4336 5H14.564V3H11.4336V5Z"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3906 8H15.608"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3906 11H15.608"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3906 14H15.608"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3906 17H15.608"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.3906 20H15.608"
                stroke="#ccb073"
                strokeWidth={1.4}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <p className="font-bold text-center font-primary text-l md:text-3xl mb-0 mt-s pt-3xs text-black py-1">
            50,000+
          </p>
          <p className="text-center font-secondary mt-[2px] px-s md:px-0 text-m font-secondary-light text-black">
            In planning and progress*
          </p>
        </div>
      </li>

      {/* Item 4 */}
      <li className="flex flex-1 basis-1/2 md:basis-1/3 justify-center pt-l">
        <div className="flex flex-col items-center">
          <span
            style={{ width: 80, height: 80 }}
            className="leading-[0] svg-icon stroke-gold"
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={80}
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-inherit"
              role="img"
            >
              <g clipPath="url(#clip0_0_985)">
                <mask
                  id="mask0_0_985"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x={0}
                  y={0}
                  width={24}
                  height={24}
                >
                  <path
                    d="M24 24H0V0H24V24Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_0_985)">
                  <path
                    d="M12 21.9238C16.9705 21.9238 21 17.8943 21 12.9238C21 7.95331 16.9705 3.92383 12 3.92383C7.02952 3.92383 3 7.95331 3 12.9238C3 17.8943 7.02952 21.9238 12 21.9238Z"
                    stroke="#ccb073"
                    strokeWidth={1.4}
                  />
                  <path
                    d="M12 3.92383V21.9238"
                    stroke="#ccb073"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M21 12.9238H3"
                    stroke="#ccb073"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M16.5 7.92383L7.5 17.9238"
                    stroke="#ccb073"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                  />
                  <path
                    d="M7.5 7.92383L16.5 17.9238"
                    stroke="#ccb073"
                    strokeWidth={1.4}
                    strokeLinecap="round"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_0_985">
                  <rect width={24} height={24} fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <p className="font-bold text-center font-primary text-l md:text-3xl mb-0 mt-s pt-3xs text-black py-1">
            48+ million sq ft
          </p>
          <p className="text-center font-secondary mt-[2px] px-s md:px-0 text-m font-secondary-light text-black">
            Delivered across MENA
          </p>
        </div>
      </li>
    </ul>
  );
};

export default StatsSection;
