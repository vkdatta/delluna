export const name="door-open-duotone";
export const id="dl_68d7ca148f5a4b329e9f";
export const url=new URL("../icons/door-open-duotone.svg?v=3415a85d083eac3f506076ba094a8dfca4f1294cd2dfb0c5f958f950773c23d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
