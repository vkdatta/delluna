export const name="remove-fill";
export const id="dl_3de4422dc5683a7c0f54";
export const url=new URL("../icons/remove-fill.svg?v=0280ebc1947c5dbe9783ff92bca6f2e5eea613172e983939eb07cf3c9c36218c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
