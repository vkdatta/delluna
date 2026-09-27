export const name="12mp";
export const id="dl_b02031e43ddea8ebb82c";
export const url=new URL("../icons/12mp.svg?v=0e94673b811c2fb1bb57029e64973de748cdd7e2440c89602a765f16ba7b4703",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
