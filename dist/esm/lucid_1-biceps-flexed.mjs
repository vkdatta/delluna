export const name="lucid_1-biceps-flexed";
export const id="dl_b3d6e2ece22a4ea1a31d";
export const url=new URL("../icons/lucid_1-biceps-flexed.svg?v=24db8142d786e05fd3612dec41407ae5ce218dba3fc96b85bfb8e4e60b7df488",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
