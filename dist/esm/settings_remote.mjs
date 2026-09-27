export const name="settings_remote";
export const id="dl_92ee4b40be0cdf57d67d";
export const url=new URL("../icons/settings_remote.svg?v=2954d2224833003c2e7e8f91e2fe3ded3f80687ad33bd23bcc79f4eb3fd7cff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
