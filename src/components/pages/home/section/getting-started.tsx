import Link from '@docusaurus/Link';
import React from 'react';
import cx from 'classnames';
import styles from '@site/src/components/pages/home/section/section.module.scss';
import FadeIntoView from '@site/src/components/molecules/animations/fade-into-view';

const GettingStarted = () => {
  return (
    <span className={styles.gettingStartedSection}>
      <FadeIntoView>
        <h2 className={cx('text-center font-bold mb-4', styles.subtitle)}>Get Started Using:</h2>
      </FadeIntoView>

      <FadeIntoView className={styles.gettingStartedLinks}>
        <div className="w-full mt-6 inline-flex gap-10 flex-col md:flex-row items-center pb-16">
          <Link to="/docs/github/getting-started" className={styles.button}>
            <span>
              <svg
                height="9.5vmin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="143.88 384 480.25 129.87"
                fill="none"
              >
                <g
                  fill="#ffffff"
                  transform="matrix(1.3333333,0,0,-1.3333333,0,640.93333) scale(0.1)"
                >
                  <path d="m 1772.81,1510.13 h -302.67 c -7.81,0 -14.14,-6.34 -14.14,-14.15 V 1348 c 0,-7.81 6.33,-14.17 14.14,-14.17 h 118.07 v -183.85 c 0,0 -26.51,-9.04 -99.81,-9.04 -86.47,0 -207.27,31.6 -207.27,297.23 0,265.7 125.79,300.65 243.88,300.65 102.23,0 146.26,-17.99 174.29,-26.67 8.81,-2.7 16.95,6.07 16.95,13.89 l 33.76,142.97 c 0,3.67 -1.24,8.06 -5.4,11.05 -11.38,8.12 -80.81,46.97 -256.21,46.97 -202.05,0 -409.32,-85.96 -409.32,-499.22 0,-413.26 237.3,-474.841 437.27,-474.841 165.57,0 266.01,70.751 266.01,70.751 4.14,2.29 4.59,8.08 4.59,10.72 v 461.54 c 0,7.81 -6.33,14.15 -14.14,14.15" />
                  <path d="m 3332.65,1877.51 c 0,7.88 -6.24,14.23 -14.06,14.23 h -170.42 c -7.78,0 -14.11,-6.35 -14.11,-14.23 0,-0.03 0.05,-329.34 0.05,-329.34 h -265.65 v 329.34 c 0,7.88 -6.26,14.23 -14.06,14.23 h -170.41 c -7.75,0 -14.08,-6.35 -14.08,-14.23 V 985.742 c 0,-7.871 6.33,-14.262 14.08,-14.262 h 170.41 c 7.8,0 14.06,6.391 14.06,14.262 v 381.448 h 265.65 c 0,0 -0.47,-381.42 -0.47,-381.448 0,-7.871 6.32,-14.262 14.12,-14.262 h 170.82 c 7.81,0 14.05,6.391 14.07,14.262 v 891.768" />
                  <path d="m 2094.4,1760.5 c 0,61.36 -49.19,110.95 -109.89,110.95 -60.64,0 -109.88,-49.59 -109.88,-110.95 0,-61.31 49.24,-111.04 109.88,-111.04 60.7,0 109.89,49.73 109.89,111.04" />
                  <path d="m 2082.22,1173.86 c 0,22.85 0,411.64 0,411.64 0,7.82 -6.31,14.21 -14.1,14.21 h -169.89 c -7.79,0 -14.76,-8.04 -14.76,-15.85 0,0 0,-495.34 0,-589.77 0,-17.328 10.8,-22.488 24.77,-22.488 0,0 72.52,0 153.06,0 16.8,0 20.92,8.25 20.92,22.769 0,31.609 0,155.449 0,179.489" />
                  <path d="m 3980.32,1598.37 h -169.11 c -7.75,0 -14.07,-6.4 -14.07,-14.27 v -437.25 c 0,0 -42.97,-31.44 -103.95,-31.44 -60.97,0 -77.15,27.67 -77.15,87.37 0,59.79 0,381.32 0,381.32 0,7.87 -6.3,14.27 -14.07,14.27 h -171.64 c -7.74,0 -14.09,-6.4 -14.09,-14.27 0,0 0,-232.85 0,-410.18 0,-177.361 98.84,-220.748 234.81,-220.748 111.56,0 201.5,61.638 201.5,61.638 0,0 4.28,-32.49 6.22,-36.33 1.93,-3.839 6.98,-7.73 12.44,-7.73 l 109.19,0.492 c 7.74,0 14.09,6.399 14.09,14.238 l -0.06,598.62 c 0,7.87 -6.31,14.27 -14.11,14.27" />
                  <path d="m 4375.84,1115.95 c -58.66,1.78 -98.45,28.41 -98.45,28.41 v 282.4 c 0,0 39.25,24.06 87.41,28.36 60.9,5.46 119.58,-12.94 119.58,-158.22 0,-153.19 -26.48,-183.42 -108.54,-180.95 z m 66.7,502.45 c -96.05,0 -161.38,-42.85 -161.38,-42.85 v 301.96 c 0,7.88 -6.3,14.23 -14.06,14.23 h -170.91 c -7.77,0 -14.08,-6.35 -14.08,-14.23 V 985.742 c 0,-7.871 6.31,-14.262 14.1,-14.262 0.02,0 118.54,0 118.58,0 5.34,0 9.38,2.75 12.37,7.559 2.95,4.801 7.2,41.131 7.2,41.131 0,0 69.88,-66.229 202.17,-66.229 155.32,0 244.39,78.779 244.39,353.659 0,274.88 -142.26,310.8 -238.38,310.8" />
                  <path d="m 2572.02,1599.79 h -127.84 c 0,0 -0.19,168.84 -0.19,168.88 0,6.4 -3.3,9.59 -10.69,9.59 h -174.2 c -6.78,0 -10.41,-2.98 -10.41,-9.49 v -174.52 c 0,0 -87.3,-21.08 -93.21,-22.77 -5.87,-1.71 -10.2,-7.13 -10.2,-13.6 v -109.67 c 0,-7.89 6.3,-14.25 14.09,-14.25 h 89.32 c 0,0 0,-114.7 0,-263.84 0,-195.968 137.46,-215.222 230.21,-215.222 42.39,0 93.09,13.622 101.46,16.704 5.06,1.867 8,7.109 8,12.8 l 0.15,120.638 c 0,7.86 -6.65,14.24 -14.13,14.24 -7.46,0 -26.51,-3.04 -46.13,-3.04 -62.8,0 -84.07,29.2 -84.07,66.99 0,37.77 -0.01,250.73 -0.01,250.73 h 127.85 c 7.79,0 14.1,6.36 14.1,14.25 v 137.37 c 0,7.87 -6.31,14.21 -14.1,14.21" />
                </g>
              </svg>
            </span>
          </Link>
          <Link to="/docs/gitlab/getting-started" className={styles.button}>
            <span>
              <svg
                height="9.5vmin"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="148.83 115 693.75 150"
                fill="none"
              >
                <g fill="#ffffff">
                  <path d="M302,174.37l-.21-.56-21.2-55.3a5.5,5.5,0,0,0-2.18-2.63,5.6,5.6,0,0,0-8.41,3.2l-14.31,43.81H197.74l-14.31-43.81a5.61,5.61,0,0,0-8.41-3.2,5.5,5.5,0,0,0-2.18,2.63l-21.19,55.31-.22.55a39.36,39.36,0,0,0,13.06,45.49l.08.06.18.14L197,244.23l16,12.09,9.72,7.35a6.57,6.57,0,0,0,7.92,0l9.72-7.35,16-12.09,32.48-24.31.09-.07A39.36,39.36,0,0,0,302,174.37Z" />
                  <path d="M428.92,171.51H451.7c-3.8-24.22-24.77-41.09-52.06-41.09-32.29,0-56.52,23.74-56.52,63.5,0,39.05,23.14,63.27,57.18,63.27,30.55,0,52.42-19.65,52.42-51.46V190.91H402.65v17.47h28.44c-.36,17.6-12.11,28.74-30.67,28.74-20.66,0-34.82-15.48-34.82-43.44,0-27.78,14.4-43.2,34.34-43.2C414.82,150.48,425,158.43,428.92,171.51Z" />
                  <path d="M467.78,255.5h21.81V163H467.78Zm11-107.2c6.93,0,12.59-5.31,12.59-11.81s-5.66-11.87-12.59-11.87-12.65,5.3-12.65,11.87S471.75,148.3,478.74,148.3Z" />
                  <path d="M554.9,163H536.64V140.78H514.83V163H501.7v16.87h13.13v51.46c-.12,17.41,12.54,26,28.92,25.49a44.29,44.29,0,0,0,12.84-2.17l-3.68-17.06a26.57,26.57,0,0,1-6.38.85c-5.49,0-9.89-1.93-9.89-10.73V179.82H554.9Z" />
                  <path d="M571.78,255.5h76.7V236.76H594.14V132.1H571.78Z" />
                  <path d="M690.26,257.37c14.52,0,23.19-6.81,27.17-14.58h.72V255.5h21V193.56c0-24.46-19.94-31.81-37.6-31.81-19.46,0-34.4,8.67-39.22,25.54l20.37,2.9c2.16-6.33,8.31-11.75,19-11.75,10.13,0,15.67,5.18,15.67,14.28v.36c0,6.26-6.57,6.57-22.9,8.31-17.95,1.93-35.12,7.29-35.12,28.14C659.29,247.73,672.6,257.37,690.26,257.37Zm7.17-16c-9.1,0-15.61-4.16-15.61-12.17,0-8.38,7.29-11.87,17-13.26,5.73-.78,17.18-2.23,20-4.51v10.9C718.88,232.6,710.56,241.34,697.43,241.34Z" />
                  <path d="M755.21,255.5h21.45V240.92h1.26c3.44,6.75,10.61,16.21,26.52,16.21,21.81,0,38.14-17.3,38.14-47.78,0-30.85-16.81-47.6-38.2-47.6-16.33,0-23.14,9.82-26.46,16.51H777V132.1H755.21Zm21.39-46.27c0-18,7.71-29.59,21.75-29.59,14.52,0,22,12.35,22,29.59s-7.59,30-22,30C784.43,239.23,776.6,227.18,776.6,209.23Z" />
                </g>
              </svg>
            </span>
          </Link>
          <Link to="/docs/circleci/getting-started" className={styles.button}>
            <span>
              <svg
                height="9.5vmin"
                viewBox="0 0 120 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M105.517 20.1526C109.094 20.1526 112.095 17.697 112.94 14.3775C112.945 14.3535 112.949 14.3285 112.949 14.3032C112.949 14.1013 112.786 13.9379 112.585 13.9379H109.496C109.349 13.9379 109.223 14.0248 109.166 14.1512L109.165 14.1507C108.53 15.5345 107.137 16.4965 105.517 16.4965C103.301 16.4965 101.504 14.6963 101.504 12.4752C101.504 10.2544 103.301 8.45375 105.517 8.45375C107.137 8.45375 108.53 9.41571 109.165 10.7998L109.166 10.7991C109.223 10.9245 109.349 11.0128 109.496 11.0128H112.585C112.786 11.0128 112.949 10.8491 112.949 10.6471C112.949 10.6217 112.945 10.5983 112.94 10.574C112.095 7.25447 109.094 4.79812 105.517 4.79812C101.287 4.79812 97.8548 8.23631 97.8548 12.4752C97.8548 16.7153 101.287 20.1526 105.517 20.1526ZM118.683 5.16355V19.4211C118.683 19.6227 118.519 19.7864 118.319 19.7864H115.4C115.198 19.7864 115.035 19.6227 115.035 19.4211V5.16355H118.683ZM116.859 0.0456006C115.65 0.0456006 114.67 1.02806 114.67 2.23915C114.67 3.45061 115.65 4.4327 116.859 4.4327C118.068 4.4327 119.048 3.45061 119.048 2.23915C119.048 1.02806 118.068 0.0456006 116.859 0.0456006ZM82.729 11.0128C83.3688 8.69492 85.4878 6.99167 88.0047 6.99167C90.5216 6.99167 92.6389 8.69492 93.2786 11.0128H82.729ZM88.0047 4.79812C83.7726 4.79812 80.3419 8.23507 80.3419 12.4752C80.3419 16.7148 83.7726 20.1526 88.0047 20.1526C90.9962 20.1526 93.5847 18.4339 94.8465 15.9294C94.8718 15.8796 94.886 15.8246 94.886 15.7651C94.886 15.5628 94.7226 15.3998 94.5211 15.3998H92.8278C92.7072 15.3998 92.6001 15.459 92.5343 15.5502C91.5491 17.0032 89.8885 17.9588 88.0047 17.9588C85.229 17.9588 82.9381 15.8888 82.5811 13.206H95.2915C95.4871 13.206 95.6456 13.052 95.6556 12.859C95.6623 12.7319 95.6658 12.6038 95.6658 12.4752C95.6658 8.23507 92.236 4.79812 88.0047 4.79812ZM77.7879 0.411151H76.3289C76.1266 0.411151 75.9639 0.574915 75.9639 0.776577V19.4211C75.9639 19.6227 76.1266 19.7864 76.3289 19.7864H77.7879C77.9895 19.7864 78.1534 19.6227 78.1534 19.4211V0.776577C78.1534 0.574915 77.9895 0.411151 77.7879 0.411151ZM73.4096 15.3998H71.7158C71.5977 15.3998 71.4932 15.4564 71.4275 15.5433C70.4438 17.0002 68.7799 17.9588 66.8931 17.9588C63.8694 17.9588 61.4198 15.5037 61.4198 12.4752C61.4198 9.44653 63.8694 6.99167 66.8931 6.99167C68.7799 6.99167 70.4438 7.9504 71.4275 9.40689C71.494 9.49424 71.5986 9.55065 71.7158 9.55065H73.4096C73.6114 9.55065 73.7749 9.38664 73.7749 9.1851C73.7749 9.12558 73.7598 9.07029 73.7345 9.02084C72.4735 6.51653 69.8833 4.79812 66.8931 4.79812C62.6612 4.79812 59.231 8.23507 59.231 12.4752C59.231 16.7148 62.6612 20.1526 66.8931 20.1526C69.8833 20.1526 72.4735 18.4339 73.7345 15.9294C73.7598 15.8796 73.7749 15.8246 73.7749 15.7651C73.7749 15.5628 73.6114 15.3998 73.4096 15.3998ZM58.8712 4.80695C56.6632 4.91132 54.8998 5.96821 53.7577 7.58262V5.52848C53.7577 5.32769 53.5941 5.16355 53.3927 5.16355H51.9334C51.7318 5.16355 51.5687 5.32769 51.5687 5.52848V19.4211C51.5687 19.6227 51.7318 19.7864 51.9334 19.7864H53.3927C53.5941 19.7864 53.7577 19.6227 53.7577 19.4211V12.4752C53.7577 9.56966 56.0135 7.19247 58.8652 7.00435C59.0668 7.00435 59.231 6.84033 59.231 6.63805V5.1725C59.231 4.97208 59.0701 4.8108 58.8712 4.80695ZM49.3792 19.4211V5.16355H47.1899V19.4211C47.1899 19.6227 47.3538 19.7864 47.5551 19.7864H49.0143C49.2158 19.7864 49.3792 19.6227 49.3792 19.4211ZM49.7438 2.23915C49.7438 3.04679 49.091 3.70147 48.2847 3.70147C47.4789 3.70147 46.8255 3.04679 46.8255 2.23915C46.8255 1.43151 47.4789 0.776577 48.2847 0.776577C49.091 0.776577 49.7438 1.43151 49.7438 2.23915ZM44.6359 15.3998H42.9425C42.8239 15.3998 42.7204 15.4564 42.6531 15.5433C41.6701 17.0002 40.0067 17.9588 38.119 17.9588C35.096 17.9588 32.646 15.5037 32.646 12.4752C32.646 9.44653 35.096 6.99167 38.119 6.99167C40.0067 6.99167 41.6701 7.9504 42.6539 9.40689C42.7204 9.49424 42.8249 9.55065 42.9425 9.55065H44.6359C44.8378 9.55065 45.0017 9.38664 45.0017 9.1851C45.0017 9.12558 44.9859 9.07029 44.9617 9.02084C43.6999 6.51653 41.1096 4.79812 38.119 4.79812C33.8873 4.79812 30.4563 8.23507 30.4563 12.4752C30.4563 16.7148 33.8873 20.1526 38.119 20.1526C41.1096 20.1526 43.6999 18.4339 44.9617 15.9294C44.9859 15.8796 45.0017 15.8246 45.0017 15.7651C45.0017 15.5628 44.8378 15.3998 44.6359 15.3998ZM12.0774 0C6.2655 0 1.38827 3.98986 0.015625 9.38403C0.0063244 9.42329 0 9.4633 0 9.50505C0 9.83307 0.265501 10.099 0.593006 10.099H5.61111C5.85007 10.099 6.05456 9.95608 6.14893 9.75206L6.1498 9.75231C7.1808 7.50347 9.44544 5.94013 12.0774 5.94013C15.6782 5.94013 18.5988 8.86652 18.5988 12.4752C18.5988 16.084 15.6782 19.0103 12.0774 19.0103C9.44544 19.0103 7.1808 17.447 6.1498 15.1975L6.14893 15.1988C6.05456 14.9944 5.85007 14.8517 5.61111 14.8517H0.593006C0.265501 14.8517 0 15.1169 0 15.4458C0 15.4864 0.0063244 15.5252 0.0147569 15.5641C1.38703 20.9586 6.26439 24.9501 12.0774 24.9501C18.9529 24.9501 24.5277 19.3641 24.5277 12.4752C24.5277 5.58551 18.9529 0 12.0774 0ZM9.11272 12.4752C9.11272 10.8352 10.4404 9.50505 12.0774 9.50505C13.7143 9.50505 15.0414 10.8352 15.0414 12.4752C15.0414 14.1153 13.7143 15.4458 12.0774 15.4458C10.4404 15.4458 9.11272 14.1153 9.11272 12.4752Z"
                  fill="#ffffff"
                />
              </svg>
            </span>
          </Link>
        </div>
      </FadeIntoView>
    </span>
  );
};

export default GettingStarted;
