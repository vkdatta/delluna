export const name="lucid_1-bookmark-x";
export const id="dl_b76297e049874418942d";
export const url=new URL("../icons/lucid_1-bookmark-x.svg?v=5dc58ac7cabfdc0e3b6ace3298aeae864b1adb3d9a8b3889874883a5ee4a5239",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
