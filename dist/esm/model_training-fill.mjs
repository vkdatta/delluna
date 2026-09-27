export const name="model_training-fill";
export const id="dl_2e4f1c3ff3941f79e925";
export const url=new URL("../icons/model_training-fill.svg?v=dab9eaf42c5e1e72543bf835eaa4a0baeb0d42da78acf1228568c438cbc2fd50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
