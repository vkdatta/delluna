export const name="lucid_3-section";
export const id="dl_998096a1e24340e88360";
export const url=new URL("../icons/lucid_3-section.svg?v=2f43d0f28047e39638f42568f153d317b0a5112957d9eaf9b0498ef7ebef01d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
