export const name="immunology-fill";
export const id="dl_8992f804d0c94172a0e7";
export const url=new URL("../icons/I/immunology-fill.svg?v=fbe964fd6a597a8b19720ae7fa79f883d3cbc062b2e4e650d67efafaed5d900c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
