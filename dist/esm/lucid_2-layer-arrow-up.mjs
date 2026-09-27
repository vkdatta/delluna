export const name="lucid_2-layer-arrow-up";
export const id="dl_129cd195f0c140b8acd9";
export const url=new URL("../icons/lucid_2-layer-arrow-up.svg?v=d468e37ba876d106a00c3fd0cbbcb19607fa58c6398b23fb5fd6a17c82c15ff4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
