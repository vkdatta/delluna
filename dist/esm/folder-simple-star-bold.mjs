export const name="folder-simple-star-bold";
export const id="dl_17b3e5c59aee46e4bb93";
export const url=new URL("../icons/folder-simple-star-bold.svg?v=a31ffd901a330b96f6ba0b2c767da1639a52c43cecdf756c8b59b3b43ed7e4af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
