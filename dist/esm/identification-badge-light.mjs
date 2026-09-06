export const name="identification-badge-light";
export const id="dl_3a59d114a1b3457e9c73";
export const url=new URL("../icons/identification-badge-light.svg?v=af982b2fa55dfaa251ec067bf6bb0ab2b71750c36771cb506e7ecd31e3aba113",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
