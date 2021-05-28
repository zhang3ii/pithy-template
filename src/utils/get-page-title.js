import defaultSettings from '@/settings'

const title = defaultSettings.title || 'trojan_platform'

export default function getPageTitle(pageTitle) {
    if (pageTitle) {
        return `${pageTitle} - ${title}`
    }
    return `${title}`
}