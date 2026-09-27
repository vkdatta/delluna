export const name="barricade";
export const id="dl_58216f5e216a44ca937e";
export const url=new URL("../icons/barricade.svg?v=9413f7b36673855c6329727e39d3c38f1f972df688c9da546aaa37c7b54d7d45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
