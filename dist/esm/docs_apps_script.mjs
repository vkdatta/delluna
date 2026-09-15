export const name="docs_apps_script";
export const id="dl_c7afc6bddc164cd09eb3";
export const url=new URL("../icons/D/docs_apps_script.svg?v=2df2acc62095215c4b2b4dc9b8fc91c15fb4685f106c493b199bd9ebaf434bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
