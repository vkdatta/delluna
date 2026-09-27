export const name="watch_wake-fill";
export const id="dl_7c88471a8777d15d9952";
export const url=new URL("../icons/watch_wake-fill.svg?v=02dc4e4a6074ef9080ce521c01d08266e8e4637754c03fb08e0e6b6317766671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
