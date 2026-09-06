export const name="pencil-ruler-bold";
export const id="dl_92a6706751474439acc5";
export const url=new URL("../icons/pencil-ruler-bold.svg?v=a42af577982a37d1f0e0e045931022b0f3b2bb4a13392a7d7fa4cee059e4b835",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
