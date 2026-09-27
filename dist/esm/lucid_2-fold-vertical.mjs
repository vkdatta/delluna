export const name="lucid_2-fold-vertical";
export const id="dl_27c4017335a2481ba179";
export const url=new URL("../icons/lucid_2-fold-vertical.svg?v=8e95fb6aba7555bb1581f0b23ff1720b1f6a415fcd451a5bccecf9e816069542",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
