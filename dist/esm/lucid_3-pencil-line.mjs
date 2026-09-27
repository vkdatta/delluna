export const name="lucid_3-pencil-line";
export const id="dl_06b3aae398f14f9287ee";
export const url=new URL("../icons/lucid_3-pencil-line.svg?v=541e97a5938fa2051c7aa881272a0fb46affa5390b5bfcf0a1b413466561cc5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
