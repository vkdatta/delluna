export const name="hide-fill";
export const id="dl_ef241547e041e51f92e5";
export const url=new URL("../icons/hide-fill.svg?v=62287547e1026b09613a5fff3ebef4a15b994f6336c4d331ab8eba792d973c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
