export const name="microsoft-excel-logo-fill";
export const id="dl_8b2ea4e45ced4828ace3";
export const url=new URL("../icons/microsoft-excel-logo-fill.svg?v=001e73fff13c5419b37dbc3087d1ef423123e450fcfe9b29be63b92a899711d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
