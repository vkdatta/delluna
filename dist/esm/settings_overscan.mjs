export const name="settings_overscan";
export const id="dl_46e720eb8e5a14cd99ce";
export const url=new URL("../icons/settings_overscan.svg?v=f7cedc522bc46394dfe640a95709cea8ba55e8f98f6e7d822e52c6e3c573e61e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
