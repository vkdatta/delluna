export const name="mobile_3";
export const id="dl_850e2a15e06d2ef8a5a3";
export const url=new URL("../icons/mobile_3.svg?v=9e57bb28be2d34a62f8caf0ae104613345404d946fd4fb8af55969fd062aa9b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
