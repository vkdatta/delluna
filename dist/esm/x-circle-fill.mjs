export const name="x-circle-fill";
export const id="dl_c6f029f08d314a2bb78b";
export const url=new URL("../icons/X/x-circle-fill.svg?v=cee7f5396e855eb535011c0dbaa3ee4a55589aabd589f26690dac496780f8e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
