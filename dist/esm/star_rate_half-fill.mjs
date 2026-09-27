export const name="star_rate_half-fill";
export const id="dl_5101418bce04a90c0dac";
export const url=new URL("../icons/star_rate_half-fill.svg?v=5a4122d20d2f30825d00e9f922ed6d4462ed71f0a8f2936012ccae273c185703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
