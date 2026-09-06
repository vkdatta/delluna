export const name="arrow-bend-right-down-light";
export const id="dl_344246fa73d9461f91df";
export const url=new URL("../icons/arrow-bend-right-down-light.svg?v=39129c2ed7a1dc7f18f69cafd28f0972120040a24310b72fccd6f9841a6621a2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
