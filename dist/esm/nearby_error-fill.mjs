export const name="nearby_error-fill";
export const id="dl_974f00aa20ea4bb2860e";
export const url=new URL("../icons/nearby_error-fill.svg?v=904f153cc8ef9ef2b6210a3a6b7925b338981349dffa0d3f9605854b18c959bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
