export const name="plus-duotone";
export const id="dl_55b6e04099f84935a49f";
export const url=new URL("../icons/plus-duotone.svg?v=b03f6a809a43ddedd006fe86e84022725d7a7f1919ac3af7d45bfea80e62b82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
