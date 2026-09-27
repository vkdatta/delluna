export const name="arrow_and_edge";
export const id="dl_a1e7fed424d5a2b69021";
export const url=new URL("../icons/arrow_and_edge.svg?v=1b1aa95e5aa7b743e8cb1f1cc20b396c6e9b0c9fe5e38991baa6cff577a8af4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
