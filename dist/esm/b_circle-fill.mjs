export const name="b_circle-fill";
export const id="dl_e3fefbcb828ff78618fe";
export const url=new URL("../icons/b_circle-fill.svg?v=f775c8fd62e1ed4964228c226ff81ec7a51d49c902e3727828c5d02fbcfd0393",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
