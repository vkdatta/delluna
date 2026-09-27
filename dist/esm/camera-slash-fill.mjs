export const name="camera-slash-fill";
export const id="dl_22482a9fbf3547f6b984";
export const url=new URL("../icons/camera-slash-fill.svg?v=87e63059ab62c13b8a312f3bdc551efcce065c93dbc6d1e3007aca153a478d81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
