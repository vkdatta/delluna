export const name="lucid_2-factory";
export const id="dl_2e2f972cae464be0bdc8";
export const url=new URL("../icons/lucid_2-factory.svg?v=b773d03d36023da712b40682bc1faa64996ab6a837ace908c614ef35c09218e9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
