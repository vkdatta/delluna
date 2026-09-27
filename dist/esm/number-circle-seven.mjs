export const name="number-circle-seven";
export const id="dl_a2866c65028047c69d3e";
export const url=new URL("../icons/number-circle-seven.svg?v=c4e28c2c63e58bdeaa4f2aa3216191b48d702109a5fbc2f340f4d60807427d98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
