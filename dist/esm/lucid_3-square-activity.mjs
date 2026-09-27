export const name="lucid_3-square-activity";
export const id="dl_ef25e6a85e1b47d78712";
export const url=new URL("../icons/lucid_3-square-activity.svg?v=de2f5cdd177f7f08c586671b8890a1b09c26f1f435eea821c97dfe5ad1f4afdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
