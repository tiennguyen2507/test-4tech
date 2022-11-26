<script setup lang="ts">
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <footer class="footer" id="footer">
    <div class="footer__info">
      <div class="footer__info__logo">
        <img src="@/assets/logo.png" alt="logo" />
        <ul class="footer__info__logo__social">
          <li><img src="@/assets/logo-social/ant-design_twitter-outlined.png" alt="twitter" /></li>
          <li><img src="@/assets/logo-social/ant-design_facebook-filled.png" alt="facebook" /></li>
          <li><img src="@/assets/logo-social/ant-design_linkedin-filled.png" alt="linkedin" /></li>
        </ul>
      </div>
      <div class="footer__info__content">
        <div class="footer__info__content__address">
          <h2>{{ t('footer.address') }}</h2>
          <ul>
            <li>
              <img src="@/assets/icon/location.png" alt="location" />
              <div>
                <p>{{ t('footer.address01') }}</p>
                <p>{{ t('footer.address02') }}</p>
              </div>
            </li>
            <li>
              <img src="@/assets/icon/mobile.png" alt="location" />
              <div class="p-phone">
                <p>(+1) 555-0108-000</p>
                <p>or</p>
                <p>(+236) 555-0108</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer__info__content__subscribe">
          <h2>{{ t('footer.subscribe') }}</h2>
          <p>{{ t('footer.subscribeContent') }}</p>
          <div class="footer__info__content__subscribe__input">
            <input type="text" :placeholder="t('footer.enterYourEmail')" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.43 18.82C14.24 18.82 14.05 18.75 13.9 18.6C13.61 18.31 13.61 17.83 13.9 17.54L19.44 12L13.9 6.46C13.61 6.17 13.61 5.69 13.9 5.4C14.19 5.11 14.67 5.11 14.96 5.4L21.03 11.47C21.32 11.76 21.32 12.24 21.03 12.53L14.96 18.6C14.81 18.75 14.62 18.82 14.43 18.82Z"
                fill="white"
              />
              <path
                d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__copyright">
      <h2>2017 Copyright. Policy.</h2>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    &__info {
      background: url('@/assets/BG_footer.png');
      background-size: cover;
      padding: 104px 230px 110px 230px;
      display: flex;
      justify-content: space-between;
      @include mobile {
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 62px 16px;
      }
      @include tablet {
        flex-direction: column;
        align-items: center;
        padding: 40px 16px 62px 16px;
      }
      &__logo {
        max-width: 163.23px;
        img {
          max-width: 163.23px;
        }
        &__social {
          padding-top: 46.91px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 28px;
          img {
            cursor: pointer;
            width: 40px;
            height: 40px;
          }
        }
      }
      &__content {
        display: flex;
        gap: 40px;
        @include mobile {
          flex-direction: column;
          gap: 70px;
          margin-top: 70px;
        }
        @include tablet {
          flex-direction: column;
          gap: 70px;
          margin-top: 70px;
        }
        h2 {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          line-height: 30px;

          color: #ffffff;
        }
        p {
          margin-bottom: 12px;
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 140%;

          color: #ffffff;
        }
        &__address {
          max-width: 410px;
          width: 100%;
          ul {
            li {
              padding-top: 40px;
              @include mobile {
                padding-top: 20px;
              }
              display: flex;
              gap: 14px;
              img {
                width: 40px;
                height: 40px;
              }
              .p-phone {
                display: flex;
                gap: 8px;
                align-items: center;
              }
            }
          }
        }
        &__subscribe {
          max-width: 410px;
          width: 100%;
          p {
            padding-top: 40px;
            @include mobile {
              padding-top: 20px;
            }
          }
          &__input {
            margin-top: 12px;
            max-width: 410px;
            width: 100%;
            height: 56px;
            border: 1px solid #ffffff;
            border-radius: 8px;

            display: flex;
            justify-content: space-between;
            padding: 16px;

            input {
              font-family: 'Montserrat';
              font-style: normal;
              font-weight: 400;
              font-size: 14px;
              line-height: 140%;
              color: #ffffff;
              background-color: transparent;
              outline: none;
              flex-grow: 1;
            }
            svg {
              cursor: pointer;
            }
          }
        }
      }
    }
    &__copyright {
      height: 80px;
      width: 100%;
      background: #000000;

      display: flex;
      justify-content: center;
      align-items: center;

      h2 {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 126%;
        color: #ffffff;
      }
    }
  }
</style>
