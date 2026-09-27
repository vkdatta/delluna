export const name="vinyl-record";
export const id="dl_3bbb5a1952c1759e747e";
export const url=new URL("../icons/vinyl-record.svg?v=ada655a0842099da477092e6c0492f370b5755d4afeeb1344fbc7b67f42cf285",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
