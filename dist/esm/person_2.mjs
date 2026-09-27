export const name="person_2";
export const id="dl_e5c0ecdc86ace4e1658f";
export const url=new URL("../icons/person_2.svg?v=97cb1b0bfb577b89ae8824ca3ca963fe4c308e7f49037d5fc5edbef03545f434",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
