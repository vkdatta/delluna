export const name="format_paint_off-fill";
export const id="dl_48b7fad8f2ba8e08ff22";
export const url=new URL("../icons/format_paint_off-fill.svg?v=83d6b04f419a35f3959535cec3a86c4b60df4ad66b707c6346a8f4a90146e3ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
