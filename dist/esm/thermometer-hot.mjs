export const name="thermometer-hot";
export const id="dl_02463b893c564186a82a";
export const url=new URL("../icons/T/thermometer-hot.svg?v=7252436a12a5717996fc031fe0e4ef79d9d603a92abc1396aac2bb207dce7270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
