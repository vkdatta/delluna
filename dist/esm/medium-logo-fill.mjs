export const name="medium-logo-fill";
export const id="dl_b3dd7f4a8e2048d0a1c2";
export const url=new URL("../icons/medium-logo-fill.svg?v=9833e01c27652786a12ed35e84cd397bc96958c1dc04482227836f14663cb399",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
