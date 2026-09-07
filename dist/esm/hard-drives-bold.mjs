export const name="hard-drives-bold";
export const id="dl_659b59510dc44f849225";
export const url=new URL("../icons/hard-drives-bold.svg?v=2ba693bda78a09d3cab785bfd08e819a2907915542b5753854cab88cc728d18b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
