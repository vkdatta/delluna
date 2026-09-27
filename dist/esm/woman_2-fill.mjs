export const name="woman_2-fill";
export const id="dl_40951e67febf8046b069";
export const url=new URL("../icons/woman_2-fill.svg?v=129a01e895aa4697876ac1d03164fb86bcf153f9f1244bae7a9ee5c4183cfd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
