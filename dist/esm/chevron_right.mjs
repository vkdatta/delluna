export const name="chevron_right";
export const id="dl_70cd1c7ec4b0b46102f8";
export const url=new URL("../icons/chevron_right.svg?v=fcc95a752c2f596bc40818163b14efe69814f8c9d7069f05e2ec5937c642d867",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
