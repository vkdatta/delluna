export const name="arrow-circle-down-right";
export const id="dl_86fd978a7d2a4762b6f1";
export const url=new URL("../icons/arrow-circle-down-right.svg?v=5645f8d7ea4dc1bc645367aea6d31e2f593135cb454501778370c36611003954",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
