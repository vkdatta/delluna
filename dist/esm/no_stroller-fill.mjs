export const name="no_stroller-fill";
export const id="dl_97719dd3f8c513fcf354";
export const url=new URL("../icons/no_stroller-fill.svg?v=c866a02dbd20bb0622ec8dc5e92fd89b5991399cfc595219128884a526cf3dda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
