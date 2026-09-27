export const name="oncology-fill";
export const id="dl_3c328663a9367f243d29";
export const url=new URL("../icons/oncology-fill.svg?v=200c563555b05bddd7a491177abc5977d9feb422c351428727b49651f9652c71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
