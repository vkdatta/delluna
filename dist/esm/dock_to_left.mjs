export const name="dock_to_left";
export const id="dl_3c4f9e1677e2fd7b50db";
export const url=new URL("../icons/dock_to_left.svg?v=5c4a7ce6860bf969dd6805cc92a03e25099ba6d2a426e95e22bf0ab170e20764",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
