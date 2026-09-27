export const name="caret-circle-double-left";
export const id="dl_3c43084db9bf430189f5";
export const url=new URL("../icons/caret-circle-double-left.svg?v=029fe25719eb6efb4394070952b4d26998dcb2419cff8fdee66a58b34aac48e3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
