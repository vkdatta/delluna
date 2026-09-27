export const name="lucid_2-file-text";
export const id="dl_fce542604fc943e28ead";
export const url=new URL("../icons/lucid_2-file-text.svg?v=c93b279db5b80313fc8b1180fe312347ca035a2ca82ab19f77ec677a31aa202d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
