export const name="dry_cleaning";
export const id="dl_b3bd27e87e177bcedfb4";
export const url=new URL("../icons/dry_cleaning.svg?v=4e5f600fc0020f183711d6257fece03a6e4542759da37ea2adfddc46df2ea3f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
