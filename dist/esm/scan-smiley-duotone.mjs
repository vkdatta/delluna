export const name="scan-smiley-duotone";
export const id="dl_bda346b6a08ab9a606f0";
export const url=new URL("../icons/scan-smiley-duotone.svg?v=4aba8a3685a53f87bd816372520470741aab7905c8bfdeb5ba7a22673e9a0d6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
