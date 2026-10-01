export const name="user-add";
export const id="dl_9f3bc44a7b3dcc660616";
export const url=new URL("../icons/user-add.svg?v=6f24beb1cf0b7642098fdeece76ef69572a24c4c2a96c5f5cc12a2efc66e9724",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
