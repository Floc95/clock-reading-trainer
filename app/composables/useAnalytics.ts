import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useAnalytics() {
    const router = useRouter();
    const isAnalyticsInitialized = ref(false);

    const initializeAnalytics = () => {
        if (typeof window !== 'undefined' && (window as any).gtag) {
            isAnalyticsInitialized.value = true;
        } else {
            console.warn('Google Analytics is not loaded.');
        }
    };

    const trackPageView = (url: string) => {
        if (isAnalyticsInitialized.value && (window as any).gtag) {
            (window as any).gtag('config', 'YOUR_GA_TRACKING_ID', {
                page_path: url,
            });
        }
    };

    const trackEvent = (eventCategory: string, eventAction: string, eventLabel?: string, eventValue?: number) => {
        if (isAnalyticsInitialized.value && (window as any).gtag) {
            (window as any).gtag('event', eventAction, {
                event_category: eventCategory,
                event_label: eventLabel,
                value: eventValue,
            });
        }
    };

    router.afterEach((to) => {
        trackPageView(to.fullPath);
    });

    return {
        initializeAnalytics,
        trackPageView,
        trackEvent,
    };
}