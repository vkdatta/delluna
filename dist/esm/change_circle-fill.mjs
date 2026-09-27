export const name="change_circle-fill";
export const id="dl_737fdeef41a0cd04fa27";
export const url=new URL("../icons/change_circle-fill.svg?v=5cf5ab4744cd2642c791e27e43b781d241f963c4dbd6d37833468ff3d0ed71d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
