export const name="source_environment-fill";
export const id="dl_c3b665a59ed5b19d9648";
export const url=new URL("../icons/source_environment-fill.svg?v=0fa39f9219bc3df8dffdd8e6be377484452550a5f8ed4f4ac2737ae73df5d07e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
