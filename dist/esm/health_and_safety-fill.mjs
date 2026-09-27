export const name="health_and_safety-fill";
export const id="dl_d7b00bdba2c8ed788564";
export const url=new URL("../icons/health_and_safety-fill.svg?v=cba1bfe1b125169bdee54f10af39549eb4a05856fb9779d4213fe1f57ec5e737",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
