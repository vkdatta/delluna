export const name="interests";
export const id="dl_be4326882bc4a933e482";
export const url=new URL("../icons/interests.svg?v=f3e033cf952ef6b7041a6393e9a523a78c66b4b19a392aa5506be620a688d4db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
