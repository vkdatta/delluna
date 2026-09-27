export const name="person_add_disabled-fill";
export const id="dl_94fbe2c7256afe32db5a";
export const url=new URL("../icons/person_add_disabled-fill.svg?v=46e8eef34a85bb5d90bac207212e319eaeb4e2dd63ff109da73ea8087b8b4e0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
