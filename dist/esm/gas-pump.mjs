export const name="gas-pump";
export const id="dl_b9fa1ae683da4a0ba4c6";
export const url=new URL("../icons/gas-pump.svg?v=e5a8f2ae08bf8f21f6c92f1b271d3cbca1602950c1a03d3a7aefb2d093aac445",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
