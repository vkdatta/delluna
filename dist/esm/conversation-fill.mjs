export const name="conversation-fill";
export const id="dl_de8c3eb151154fc5ae7f";
export const url=new URL("../icons/conversation-fill.svg?v=acb079b833b80cf84d2a7cee503033d596b86a8eb471a23e48c00557911d2154",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
