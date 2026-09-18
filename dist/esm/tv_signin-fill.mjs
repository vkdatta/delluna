export const name="tv_signin-fill";
export const id="dl_7b1fa347d0b54c169690";
export const url=new URL("../icons/tv_signin-fill.svg?v=4256b4951745d28ddc98dc99ff1e6819445c0c9d1fad3ba3fbc425ff67c8f4a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
