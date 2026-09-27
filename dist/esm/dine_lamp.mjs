export const name="dine_lamp";
export const id="dl_a68bb53958753381de63";
export const url=new URL("../icons/dine_lamp.svg?v=c0545e6139e2ddf8bf82b1c9d547b72331b51614980dabdf1982c1791a192390",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
