export const name="eye-closed-light";
export const id="dl_0ec00bf83c5b467fba11";
export const url=new URL("../icons/eye-closed-light.svg?v=1333faf1cdaf26d93b7a72dc478c8f5ae904a67a41e6d2ea0216fed4834c2e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
