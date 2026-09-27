export const name="highlighter-duotone";
export const id="dl_12ed7ec3442a4bfab81d";
export const url=new URL("../icons/highlighter-duotone.svg?v=a6d7dd0a23e5ed3dd9c853938a76dc2da04cc29c5ab159faeef1c37f8e66f6bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
