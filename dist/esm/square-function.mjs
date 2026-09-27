export const name="square-function";
export const id="dl_eb0d883b25404ed1bf61";
export const url=new URL("../icons/square-function.svg?v=bfdf40ea9125fe22a0859c28e0f42d8a9d643e2f03e07a13c2235e8f7a13d5c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
