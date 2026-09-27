export const name="repeat_on-fill";
export const id="dl_06e9dbbd9d24de69d313";
export const url=new URL("../icons/repeat_on-fill.svg?v=882fff5a36522e26aed81268ce3d618efda288e74b28c5f3ceb9b956ba6f9929",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
