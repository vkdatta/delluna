export const name="add_business";
export const id="dl_61706e1d321b32731300";
export const url=new URL("../icons/add_business.svg?v=44aa7cd6750197a9debe95fe63a2eb53cebe832c046195907d04e3949f1f4197",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
