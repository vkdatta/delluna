export const name="footprint";
export const id="dl_4512e73f8e759e497a53";
export const url=new URL("../icons/footprint.svg?v=c5f7e564d0b3437531ba52094e5f38ecf17a098ba376a83846f1d25b94c1ac1f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
