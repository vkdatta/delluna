export const name="number-circle-five-fill";
export const id="dl_bd99b2054a2347ab8524";
export const url=new URL("../icons/number-circle-five-fill.svg?v=9642d673df159724e81b089a8a973908b1cdc675661d4b6a7bab3bd6be83cb53",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
