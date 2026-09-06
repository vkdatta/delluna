export const name="cell-tower-bold";
export const id="dl_f3f22a8c2bc643488e8e";
export const url=new URL("../icons/cell-tower-bold.svg?v=6cc78c80668b6c396ef58bac9024843226ecaf9473e7a4a083268b0d1c8c9adc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
