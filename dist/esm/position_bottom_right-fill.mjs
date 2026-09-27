export const name="position_bottom_right-fill";
export const id="dl_0534472ac7d78f7d2ee0";
export const url=new URL("../icons/position_bottom_right-fill.svg?v=cf00d239627a7d5a6b9334ce90f0cfedd2f3ab8c60852babfe6147d0919075b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
