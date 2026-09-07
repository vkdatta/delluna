export const name="flip-horizontal-bold";
export const id="dl_c2ef463f4fb440e49d9a";
export const url=new URL("../icons/flip-horizontal-bold.svg?v=e90ed428aa10f722dd3b8c478d570951eed86851d3436f3453e65b35c3fd083f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
