export const name="user-duotone";
export const id="dl_4760ff34a2bd954e0b48";
export const url=new URL("../icons/user-duotone.svg?v=80ceafefb8fc16b82c4955ac7bbf6d92e67176daaabc83f5d82151753f70db96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
