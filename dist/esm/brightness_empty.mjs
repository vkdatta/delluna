export const name="brightness_empty";
export const id="dl_b8d83ff1c1b2da634e32";
export const url=new URL("../icons/brightness_empty.svg?v=228308d9f7be2db5d915e4ec5ba4dca09c8bafff03ee530bb86271d5ac4211e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
