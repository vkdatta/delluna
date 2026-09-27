export const name="avg_time";
export const id="dl_1005ca40250941961b73";
export const url=new URL("../icons/avg_time.svg?v=d49ce5bf44ae33b87933b8b292cd5e790bef20994ceb6cf77f44fa149f2eb25b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
