export const name="ladder";
export const id="dl_7f7747b376bf4c9fa20b";
export const url=new URL("../icons/ladder.svg?v=df8efd0eab6c4f7f445c20bc3126293397f4bd673ea9cd276f0002b8c8b031c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
