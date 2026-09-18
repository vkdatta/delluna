export const name="local_post_office";
export const id="dl_2e7cb2a0f05c46be89be";
export const url=new URL("../icons/local_post_office.svg?v=ddffbe125f74420f1baef8e42afc08cc98217acdf9d411e9def63e569acf90d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
