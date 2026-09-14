export const name="ad_group_off";
export const id="dl_97729ad3db4442a1aacf";
export const url=new URL("../icons/A/ad_group_off.svg?v=aab5d8f85c79e935abe55bc08d6cdeedf232ee1e3fddb3ecf8ea36c828b30537",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
