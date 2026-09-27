export const name="user-round-arrow-left";
export const id="dl_a81cb82ec9074f5fb99b";
export const url=new URL("../icons/user-round-arrow-left.svg?v=015715abceee1ab4697cb2336f17aa2e01411bb23a47f54952fa130fe3e7b584",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
