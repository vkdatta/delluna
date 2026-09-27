export const name="screenshot_frame-fill";
export const id="dl_b0c76fdfcf511f823dc0";
export const url=new URL("../icons/screenshot_frame-fill.svg?v=548fa82236808b5b84c660ebea9923d168de7dbea7c17283a148e1ca1c7a0eee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
