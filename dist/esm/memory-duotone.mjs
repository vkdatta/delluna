export const name="memory-duotone";
export const id="dl_38e1b6d7c7614ccfa655";
export const url=new URL("../icons/memory-duotone.svg?v=616b42820df7dbeb352c78e739abb9cebef1ebd0099fca602ce6a4ba6e3c89d0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
