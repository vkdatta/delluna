export const name="verified_off";
export const id="dl_9b00561844c2a4943bc2";
export const url=new URL("../icons/verified_off.svg?v=830f70b8387e8554bb1054255377a515832fd8397a48d3aeb885f9dd47eda0ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
