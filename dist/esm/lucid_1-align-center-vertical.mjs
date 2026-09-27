export const name="lucid_1-align-center-vertical";
export const id="dl_a50dd4630f1d4a7b84db";
export const url=new URL("../icons/lucid_1-align-center-vertical.svg?v=969bafc151dd3a6a963e89264d810e7870c49d44b817aac84020fc8061cfd479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
