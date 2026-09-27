export const name="ev_shadow_minus";
export const id="dl_6ebd7ad337e2b7601efa";
export const url=new URL("../icons/ev_shadow_minus.svg?v=8c472b9b97d5d24930cf947c6e0e370e30f3521a0ab72fd1e897363f6551b0f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
