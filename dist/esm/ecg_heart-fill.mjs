export const name="ecg_heart-fill";
export const id="dl_f0e80641b38f4417839a";
export const url=new URL("../icons/E/ecg_heart-fill.svg?v=2a6bdb968ca84b51ad39ca5282d3b9e4b52b12c5ad410b8b094eabe9e799d40d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
