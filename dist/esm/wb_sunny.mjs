export const name="wb_sunny";
export const id="dl_74e0d6a83dd6b2e8a451";
export const url=new URL("../icons/wb_sunny.svg?v=f4c5f83bbdcb65045ae8992784f0f4b2c4352285c99e21039a27e020727b8cac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
