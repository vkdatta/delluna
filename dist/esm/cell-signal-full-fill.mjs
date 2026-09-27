export const name="cell-signal-full-fill";
export const id="dl_d22de4d50b6143e1873c";
export const url=new URL("../icons/cell-signal-full-fill.svg?v=5ba817ef8a4e8276b213fc3eabe7cfd23c8f897f7f9b3ebdb8f6afaf286058b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
