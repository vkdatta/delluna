export const name="lucid_2-factory";
export const id="dl_2e2f972cae464be0bdc8";
export const url=new URL("../icons/lucid_2-factory.svg?v=7efa4763912f3865635afcc1e35070e12e52e0d2f35b4665dfdc5ec347b7d6ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
