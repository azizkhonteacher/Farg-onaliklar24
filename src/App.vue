<template>
  <div>
    <header>
      <div class="header-sub">
        <div class="container">
          <button class="header-sub__lang">
            <p class="header-sub__lang-p">Узбекча</p>
            <svg
              class="header-sub__lang-down"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.0876 5.42085C3.31541 5.19305 3.68475 5.19305 3.91256 5.42085L7.00008 8.50837L10.0876 5.42085C10.3154 5.19305 10.6848 5.19305 10.9126 5.42085C11.1404 5.64866 11.1404 6.01801 10.9126 6.24581L7.41256 9.74581C7.18476 9.97362 6.81541 9.97362 6.5876 9.74581L3.0876 6.24581C2.8598 6.01801 2.8598 5.64866 3.0876 5.42085Z"
                fill="white"
              />
            </svg>
          </button>

          <h4 class="header-sub__link">
            <a href="https://t.me/talaba616">«Фарғоналикларни»</a> телеграмда
            кузатинг!
          </h4>

          <svg
            class="header-sub__search"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16659 3.66667C6.12902 3.66667 3.66659 6.1291 3.66659 9.16667C3.66659 12.2042 6.12902 14.6667 9.16659 14.6667C12.2042 14.6667 14.6666 12.2042 14.6666 9.16667C14.6666 6.1291 12.2042 3.66667 9.16659 3.66667ZM1.83325 9.16667C1.83325 5.11658 5.1165 1.83333 9.16659 1.83333C13.2167 1.83333 16.4999 5.11658 16.4999 9.16667C16.4999 10.8613 15.9251 12.4217 14.9598 13.6635L19.8981 18.6018C20.2561 18.9598 20.2561 19.5402 19.8981 19.8982C19.5401 20.2562 18.9597 20.2562 18.6017 19.8982L13.6634 14.9599C12.4216 15.9252 10.8612 16.5 9.16659 16.5C5.1165 16.5 1.83325 13.2168 1.83325 9.16667Z"
              fill="#727272"
            />
          </svg>
        </div>
      </div>

      <div class="header-navbar">
        <div class="container">
          <RouterLink to="/" class="header-navbar__logo">
            <img src="./assets/images/site-logo.png" alt="img" />
          </RouterLink>

          <ul class="header-navbar__nav">
            <li v-for="link in categorys?.data" :key="link" class="header-navbar__li">
              <router-link :to="`/category/${link?.slug}`">{{ link?.title }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <div class="container">
        <div class="footer-logo">
          <RouterLink to="/">
            <img
              src="./assets/images/site-logo.png"
              alt="img"
              class="footer-logo__img"
            />
          </RouterLink>
        </div>

        <div class="footer-nav">
          <ul class="footer-nav__navbar">
            <li v-for="link in categorys?.data" :key="link" class="footer-nav__li">
              <router-link :to="`/category/${link?.slug}`">{{ link?.title }}</router-link>
            </li>
          </ul>

          <span></span>

          <p class="footer-nav__ptitle">
            2021 © Фарғоналиклар Барча ҳуқуқлар ҳимоя қилинган
          </p>
        </div>

        <div class="footer-icons">
          <ul>
            <li>
              <a href="https://google.com">
                <!-- telegram -->
                <svg
                  class="footer-icon"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_568)">
                    <path
                      d="M7.52206 11.2108L7.24134 15.2362C7.64298 15.2362 7.81693 15.0603 8.02553 14.8491L9.90857 13.0145L13.8104 15.9276C14.526 16.3341 15.0302 16.12 15.2232 15.2564L17.7844 3.02152L17.7851 3.0208C18.0121 1.94236 17.4026 1.52064 16.7054 1.7852L1.65089 7.66115C0.623451 8.06773 0.639008 8.65165 1.47623 8.91622L5.32506 10.1367L14.2651 4.43374C14.6858 4.14971 15.0684 4.30687 14.7537 4.5909L7.52206 11.2108Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_568">
                      <rect
                        width="16.9708"
                        height="17.3013"
                        fill="white"
                        transform="translate(0.863037 0.26709)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- instagram -->
                <svg
                  class="footer-icon"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_572)">
                    <path
                      d="M11.9545 0.26709H5.59047C2.66195 0.26709 0.287109 2.64193 0.287109 5.57045V11.9345C0.287109 14.863 2.66195 17.2378 5.59047 17.2378H11.9545C14.883 17.2378 17.2579 14.863 17.2579 11.9345V5.57045C17.2579 2.64193 14.883 0.26709 11.9545 0.26709ZM15.6669 11.9345C15.6669 13.9816 14.0016 15.6468 11.9545 15.6468H5.59047C3.54337 15.6468 1.87812 13.9816 1.87812 11.9345V5.57045C1.87812 3.52335 3.54337 1.8581 5.59047 1.8581H11.9545C14.0016 1.8581 15.6669 3.52335 15.6669 5.57045V11.9345Z"
                      fill="#8F8E94"
                    />
                    <path
                      d="M8.77247 4.50977C6.42945 4.50977 4.52979 6.40943 4.52979 8.75245C4.52979 11.0955 6.42945 12.9951 8.77247 12.9951C11.1155 12.9951 13.0152 11.0955 13.0152 8.75245C13.0152 6.40943 11.1155 4.50977 8.77247 4.50977ZM8.77247 11.4041C7.31087 11.4041 6.12079 10.2141 6.12079 8.75245C6.12079 7.28979 7.31087 6.10077 8.77247 6.10077C10.2341 6.10077 11.4242 7.28979 11.4242 8.75245C11.4242 10.2141 10.2341 11.4041 8.77247 11.4041Z"
                      fill="#8F8E94"
                    />
                    <path
                      d="M13.3334 4.75689C13.6456 4.75689 13.8987 4.50378 13.8987 4.19156C13.8987 3.87933 13.6456 3.62622 13.3334 3.62622C13.0212 3.62622 12.7681 3.87933 12.7681 4.19156C12.7681 4.50378 13.0212 4.75689 13.3334 4.75689Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_572">
                      <rect
                        width="16.9708"
                        height="16.9708"
                        fill="white"
                        transform="translate(0.287109 0.26709)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- facebook -->
                <svg
                  class="footer-icon"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_587)">
                    <path
                      d="M12.877 0.27069L10.6763 0.26709C8.2039 0.26709 6.60611 1.93831 6.60611 4.52496V6.48812H4.3934C4.2022 6.48812 4.04736 6.64616 4.04736 6.84109V9.68549C4.04736 9.88042 4.20237 10.0383 4.3934 10.0383H6.60611V17.2156C6.60611 17.4105 6.76095 17.5684 6.95215 17.5684H9.83911C10.0303 17.5684 10.1851 17.4103 10.1851 17.2156V10.0383H12.7723C12.9635 10.0383 13.1184 9.88042 13.1184 9.68549L13.1194 6.84109C13.1194 6.74749 13.0829 6.65786 13.0181 6.59162C12.9533 6.52538 12.865 6.48812 12.7732 6.48812H10.1851V4.82393C10.1851 4.02404 10.3721 3.61799 11.3942 3.61799L12.8767 3.61744C13.0677 3.61744 13.2225 3.45941 13.2225 3.26466V0.623472C13.2225 0.428902 13.0679 0.27105 12.877 0.27069Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_587">
                      <rect
                        width="16.9708"
                        height="17.3013"
                        fill="white"
                        transform="translate(0.149414 0.26709)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <!-- youtobe -->
                <svg
                  class="footer-icon"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_63_584)">
                    <path
                      d="M16.1581 4.74353C15.976 4.06681 15.4425 3.53337 14.7659 3.35115C13.5298 3.01294 8.58534 3.01294 8.58534 3.01294C8.58534 3.01294 3.64107 3.01294 2.40497 3.33833C1.74137 3.52035 1.19482 4.06691 1.01279 4.74353C0.6875 5.97952 0.6875 8.54281 0.6875 8.54281C0.6875 8.54281 0.6875 11.119 1.01279 12.3421C1.19501 13.0187 1.72836 13.5522 2.40507 13.7344C3.65408 14.0727 8.58553 14.0727 8.58553 14.0727C8.58553 14.0727 13.5298 14.0727 14.7659 13.7473C15.4426 13.5652 15.976 13.0317 16.1583 12.3551C16.4835 11.119 16.4835 8.55583 16.4835 8.55583C16.4835 8.55583 16.4965 5.97952 16.1581 4.74353ZM7.01113 10.9109V6.17475L11.1227 8.54281L7.01113 10.9109Z"
                      fill="#8F8E94"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_63_584">
                      <rect
                        width="16.8491"
                        height="16.8491"
                        fill="white"
                        transform="translate(0.169434 0.26709)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import services from "./services/services.js";
import { ref } from "vue";

const categorys = ref({});
const getCategorys = async () => {
  const res = await services.getCategory();
  categorys.value = res.data;
};
getCategorys();
</script>

<style lang="scss" scoped></style>
