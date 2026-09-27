export const name="mobile_2-fill";
export const id="dl_8a60ffa8b6404b058e61";
export const url=new URL("../icons/mobile_2-fill.svg?v=69737123b59ae01daf9d7b64a4eb4ee0961472689836cdd6a85b05b0cef817bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
