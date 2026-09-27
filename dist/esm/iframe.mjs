export const name="iframe";
export const id="dl_cb07ff9c6faedeaf8be9";
export const url=new URL("../icons/iframe.svg?v=3ce416a6d1bc6eeb95767f179602a1ac5923bda319d018ddef43c0d9f74b8b7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
