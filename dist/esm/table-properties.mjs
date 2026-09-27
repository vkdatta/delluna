export const name="table-properties";
export const id="dl_535c7ffad9ab499db478";
export const url=new URL("../icons/table-properties.svg?v=e8c18a65f66d8bd38947150c625edbd0fc6d9a4aef5418cdfd10e1400c10a413",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
