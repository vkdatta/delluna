export const name="table_edit";
export const id="dl_56144f99ce9cab3dd4e3";
export const url=new URL("../icons/table_edit.svg?v=4bd4cc51fa465a876e004cfca920cd19da6ee1f6810510f3334b57d8fc95514c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
