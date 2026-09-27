export const name="lucid_2-locate-off";
export const id="dl_d6849015aa6b4a01893f";
export const url=new URL("../icons/lucid_2-locate-off.svg?v=37bbeb8bed238adb332f70236da59faeeaddbbca522c8c28e71935fa8d85c5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
