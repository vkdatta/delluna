export const name="lucid_1-briefcase-medical";
export const id="dl_a95ba20142a74707b827";
export const url=new URL("../icons/lucid_1-briefcase-medical.svg?v=c58a24d809ff7af016f4f2774b26a50d2e68a54fdff35fbc10fc1d9837232773",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
