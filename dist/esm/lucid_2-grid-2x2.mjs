export const name="lucid_2-grid-2x2";
export const id="dl_71da725e64a745be92b3";
export const url=new URL("../icons/lucid_2-grid-2x2.svg?v=b59cbc858e30c10ac7de4236fbe0f148557b2324f3590579fddace4a35c2470c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
