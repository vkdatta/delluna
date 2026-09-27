export const name="developer_mode_tv";
export const id="dl_a2266e8f2e5e70f88b15";
export const url=new URL("../icons/developer_mode_tv.svg?v=729c8c1d32901e08de169cef64cfd1ee353fa600a852ee6f77afa17219fad494",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
