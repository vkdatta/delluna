export const name="near_me_disabled";
export const id="dl_c574bbedd35acd78dfc8";
export const url=new URL("../icons/near_me_disabled.svg?v=629c1133217665af0abf88f77e63b6951721736ac8b286a1b0aaedfe3eecb3ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
