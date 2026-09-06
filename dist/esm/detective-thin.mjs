export const name="detective-thin";
export const id="dl_9140e42765ff4374a0aa";
export const url=new URL("../icons/detective-thin.svg?v=190594d3c79a1c1b714ba5480801b731991d457d8f5475cba855cd2ea1fb120e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
