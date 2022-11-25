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
            <img src="@/assets/icon/arrow-right-white.png" alt="arrow-right" />
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
            img {
              width: 24px;
              height: 24px;
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
