export const name="group_off-fill";
export const id="dl_9665cac8793e35ec6b3c";
export const url=new URL("../icons/group_off-fill.svg?v=2a3f788845cdc6abd42cc94f554302f2641da973f44b82406117b5fe88b0361c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
