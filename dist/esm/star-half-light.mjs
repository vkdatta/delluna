export const name="star-half-light";
export const id="dl_6897891003e94824b88f";
export const url=new URL("../icons/S/star-half-light.svg?v=65113e2e234fdf23e8c39d1ebc14aa557f19025d59bd41bef686a3dc3224aa8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
