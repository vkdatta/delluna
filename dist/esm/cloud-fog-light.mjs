export const name="cloud-fog-light";
export const id="dl_cb26cf3e6b2b435390c2";
export const url=new URL("../icons/cloud-fog-light.svg?v=b1ed3c2ba54613adfc4afdff709fb65dd4b68057ad0f6eeb5c41e7283d955b03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
