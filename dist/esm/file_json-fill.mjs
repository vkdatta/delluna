export const name="file_json-fill";
export const id="dl_24cc152688d8bec6de89";
export const url=new URL("../icons/file_json-fill.svg?v=7afed9b65111a9292877a5a1430c39dac9fc21bb0c7aefb3f7dba5564f615823",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
