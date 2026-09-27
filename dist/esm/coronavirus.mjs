export const name="coronavirus";
export const id="dl_946f476b090ccffb42fb";
export const url=new URL("../icons/coronavirus.svg?v=8c7c1cbcf7d47d063f8ffce5a6d85d2ac6c9c5285cff0a46831a5e765717aec8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
