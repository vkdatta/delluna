export const name="table-properties";
export const id="dl_535c7ffad9ab499db478";
export const url=new URL("../icons/table-properties.svg?v=af09c2800db841e9d165af8f6c91568c78af474567ca20a98905b03e76ddf56d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
