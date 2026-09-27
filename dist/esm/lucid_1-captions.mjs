export const name="lucid_1-captions";
export const id="dl_31ec37c7ed8946698794";
export const url=new URL("../icons/lucid_1-captions.svg?v=55edfc88371d4c3ef6f0890253b1eb25fec83dbdb7a80f89c0f2affad472b870",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
