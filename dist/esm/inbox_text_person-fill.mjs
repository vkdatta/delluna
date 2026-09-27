export const name="inbox_text_person-fill";
export const id="dl_1481dd3a2cd24a5810cf";
export const url=new URL("../icons/inbox_text_person-fill.svg?v=60071c67ae87db62e8ee61931bf28a0a5cc49562d08deb6f08da669998b097b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
