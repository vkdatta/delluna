export const name="contact_page-fill";
export const id="dl_5adbd2e84f2847889a73";
export const url=new URL("../icons/C/contact_page-fill.svg?v=967b0fc54525c968370b200159740001fc94e7a898007da6174eb299ea3e87b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
