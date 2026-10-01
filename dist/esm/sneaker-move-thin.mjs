export const name="sneaker-move-thin";
export const id="dl_a35ea31a33bd6e4721a9";
export const url=new URL("../icons/sneaker-move-thin.svg?v=2e7f3b8961613eb379a7e9766e0fbe34de2ebea30224c64fd244f5875d47e8be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
