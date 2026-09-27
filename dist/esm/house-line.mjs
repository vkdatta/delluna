export const name="house-line";
export const id="dl_266028ac09ba4737bedd";
export const url=new URL("../icons/house-line.svg?v=329511ebd4428d6a5bf82845b162e0842c25d589c4f21bcb823babd2ef918235",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
