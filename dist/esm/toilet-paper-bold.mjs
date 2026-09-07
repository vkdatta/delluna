export const name="toilet-paper-bold";
export const id="dl_97dc9d651eda4787a7d5";
export const url=new URL("../icons/T/toilet-paper-bold.svg?v=06b3d759a4ce107bbcd5a48016e96aa1b24e7aa6a6b2c92de4a4f64e5dc341af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
