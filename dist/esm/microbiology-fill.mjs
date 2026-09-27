export const name="microbiology-fill";
export const id="dl_7d711791c358681613ab";
export const url=new URL("../icons/microbiology-fill.svg?v=5f4c5afac3a650befaa0b87b07439a66294ef0167939f55ed6b6621af8e6b108",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
