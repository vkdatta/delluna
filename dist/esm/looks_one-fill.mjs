export const name="looks_one-fill";
export const id="dl_97746c692726b02f50e6";
export const url=new URL("../icons/looks_one-fill.svg?v=b7dc01177c95ace7247bb88791ab9c929121d394ca6dba755d1f7804518c6e28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
