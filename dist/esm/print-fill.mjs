export const name="print-fill";
export const id="dl_c505dcccdede4b0a831a";
export const url=new URL("../icons/P/print-fill.svg?v=f01de7d653587ae257e01e3b6a83fca860f2b83d551d4d05720e6af7beb5bf5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
