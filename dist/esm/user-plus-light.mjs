export const name="user-plus-light";
export const id="dl_772cee5e848604c72115";
export const url=new URL("../icons/user-plus-light.svg?v=f8cda2c9a28b165ed71b1cff76c9ffac22d3b01fa61196948f1b1d6e29a59a40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
