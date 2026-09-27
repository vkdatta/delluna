export const name="list-checks";
export const id="dl_04ab0ed9220b4e4eaaaf";
export const url=new URL("../icons/list-checks.svg?v=14d7c23db91b6f932b788d53eb7b046cc083ae8aae1603a186afeb308d314b0d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
