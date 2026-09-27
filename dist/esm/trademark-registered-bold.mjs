export const name="trademark-registered-bold";
export const id="dl_461885d8f2d935859f75";
export const url=new URL("../icons/trademark-registered-bold.svg?v=bb64b9c2131d193a65347986d5c63fd45ed05d06e95dc082d24a0104f3844ec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
