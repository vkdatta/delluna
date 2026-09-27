export const name="fatarrow";
export const id="dl_e63d4d286a3a4d079e9d";
export const url=new URL("../icons/fatarrow.svg?v=1a748e09405a98316b40f5529b73ceb04ada9d37b08c98ed222010fb7468bfb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
