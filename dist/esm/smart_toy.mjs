export const name="smart_toy";
export const id="dl_229df283711d9f96d17e";
export const url=new URL("../icons/smart_toy.svg?v=4b313527398c0f4a56338df4b87c7734faa1de75b5715abdb30e6a330fb4ac4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
