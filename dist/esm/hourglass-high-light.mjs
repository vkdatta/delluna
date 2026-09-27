export const name="hourglass-high-light";
export const id="dl_c4d52a334868410b946e";
export const url=new URL("../icons/hourglass-high-light.svg?v=8ebcc61207894c3711c19dca5f78175aa1855490eed6503d32b3417af784f0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
