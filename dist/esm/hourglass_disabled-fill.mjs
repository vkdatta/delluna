export const name="hourglass_disabled-fill";
export const id="dl_02d44fd6993e4fcdba45";
export const url=new URL("../icons/H/hourglass_disabled-fill.svg?v=97bf01a6988f52f183c638bacf285ca166682fc7fcfad84a1a75fced7bb384fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
