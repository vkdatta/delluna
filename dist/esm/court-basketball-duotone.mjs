export const name="court-basketball-duotone";
export const id="dl_2433a3742eea45c79d16";
export const url=new URL("../icons/court-basketball-duotone.svg?v=ab1ee2a0f8655c89dba2930a725e46f11b7827dffd88bc1068f924aef4e9cda7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
