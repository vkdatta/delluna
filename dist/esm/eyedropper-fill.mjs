export const name="eyedropper-fill";
export const id="dl_7de63493682e43609a4d";
export const url=new URL("../icons/eyedropper-fill.svg?v=8fb839f52aaadbe156dc9982deab2288c1e23fe335d65f7a638ba21ac8078037",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
