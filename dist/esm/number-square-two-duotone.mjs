export const name="number-square-two-duotone";
export const id="dl_ff37d91401584ef0a270";
export const url=new URL("../icons/number-square-two-duotone.svg?v=984db7990a1b0a78fb34b6193ad262ff8db173243c7a01907936df3264ef441b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
