export const name="stadium-fill";
export const id="dl_ab7670ad6aae4c36bbbc";
export const url=new URL("../icons/S/stadium-fill.svg?v=59dd9f8fb6794f3d805cb90378f39c6df4f26b31f018a41a62c1377dbfefe718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
