export const name="dry_cleaning";
export const id="dl_61b6c6eeb97fbe012330";
export const url=new URL("../icons/dry_cleaning.svg?v=df63f8c17f3cd88cd78d4936264e3dc903526bff3e85757f748048f56f2c9a3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
