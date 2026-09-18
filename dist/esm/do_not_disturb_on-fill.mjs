export const name="do_not_disturb_on-fill";
export const id="dl_9e5799c124fc4979a375";
export const url=new URL("../icons/do_not_disturb_on-fill.svg?v=4a80f3cf936689aa44f03f9414c7f94a4e0b19f1f3c1589d3bb490ba2bc9aa0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
