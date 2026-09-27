export const name="exclude-square-fill";
export const id="dl_f99eef81d09d4081841c";
export const url=new URL("../icons/exclude-square-fill.svg?v=df6514c637f456e1d9b3429764f267d8633eecb4d6b764811c5609adbc67619f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
