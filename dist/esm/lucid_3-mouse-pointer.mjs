export const name="lucid_3-mouse-pointer";
export const id="dl_8a8be6e68b3b4b3589ad";
export const url=new URL("../icons/lucid_3-mouse-pointer.svg?v=cf77ec4e886df7deffa3e5d61f43e75860640edd9c89e1c5e811b965c5c4c22f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
