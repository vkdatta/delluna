export const name="chess";
export const id="dl_58a00e50e89818e9e15b";
export const url=new URL("../icons/chess.svg?v=d29aae90d68872ec3bd46dbe64f33f30038263e8689a39f77433aee5895f8f15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
