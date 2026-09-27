export const name="18mp";
export const id="dl_fb1ee41d22a07f25a660";
export const url=new URL("../icons/18mp.svg?v=1c465baf11b18f51ca65c0284ee9d36a1f75b50c53f17f95bb7ec7a6c9e8e5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
