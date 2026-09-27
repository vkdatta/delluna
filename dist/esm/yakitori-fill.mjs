export const name="yakitori-fill";
export const id="dl_e5125f0a5b74236c00af";
export const url=new URL("../icons/yakitori-fill.svg?v=25918486150deab813e8244ae3f9c144d2312d106d0d9047913be90e5f034bda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
