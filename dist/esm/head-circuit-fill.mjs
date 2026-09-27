export const name="head-circuit-fill";
export const id="dl_661531a5aff848dcb5d2";
export const url=new URL("../icons/head-circuit-fill.svg?v=cd5ecfcd9d0e5e242ab7735424cff613032d03b54e72c26c2b0618ffe8c7ba79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
