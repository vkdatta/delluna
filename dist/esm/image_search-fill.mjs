export const name="image_search-fill";
export const id="dl_1c6e0e33ce8fe1c672f2";
export const url=new URL("../icons/image_search-fill.svg?v=f1547bb4447359239e67dd42cafcb0bce03c1ffe8926d9161a57be4f19d435fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
