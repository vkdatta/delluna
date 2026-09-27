export const name="user-round-arrow-left";
export const id="dl_a81cb82ec9074f5fb99b";
export const url=new URL("../icons/user-round-arrow-left.svg?v=a3689af60a94484d7c49a10811c0c24788d1b3839b99f10690d3b762d9f12188",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
