export const name="user-round-arrow-left";
export const id="dl_a81cb82ec9074f5fb99b";
export const url=new URL("../icons/user-round-arrow-left.svg?v=f5d5fe151e7489feb24a60ebfeb43fd7024f470e0ec4e7e977799525d9c64c9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
