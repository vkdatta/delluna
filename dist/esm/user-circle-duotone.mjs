export const name="user-circle-duotone";
export const id="dl_65525d2f314d6a1c5715";
export const url=new URL("../icons/user-circle-duotone.svg?v=78543ff37cdaa4c7b6a19ff3381968126fe22860c9636a5904a8769a4f1ffa2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
