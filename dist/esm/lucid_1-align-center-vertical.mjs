export const name="lucid_1-align-center-vertical";
export const id="dl_a50dd4630f1d4a7b84db";
export const url=new URL("../icons/lucid_1-align-center-vertical.svg?v=779517a5d389e8c12a4c1956f6b0fe8409f747fc7ddf2ddd4b5cc04b0bc3e766",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
