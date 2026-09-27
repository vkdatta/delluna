export const name="print_lock";
export const id="dl_0dcd119db8c33818e093";
export const url=new URL("../icons/print_lock.svg?v=e8698af34daa7753b7e4a9676800085f7855be62fd2dc188326475ef446a8c6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
