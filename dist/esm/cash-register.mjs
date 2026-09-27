export const name="cash-register";
export const id="dl_ce7506fe0cca4ed8b6dd";
export const url=new URL("../icons/cash-register.svg?v=2ead34f74da9e0a94e3ba1375831962fda8075e5e863ef06b0b325cc92c85d0f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
