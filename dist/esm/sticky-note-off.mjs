export const name="sticky-note-off";
export const id="dl_dac9e818b1254961b7db";
export const url=new URL("../icons/sticky-note-off.svg?v=cbff0056d3d1e1563174dac62760686ff2e94fe2cf22f44d955a5efa4b34acda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
