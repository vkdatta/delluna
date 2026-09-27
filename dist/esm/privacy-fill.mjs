export const name="privacy-fill";
export const id="dl_f63c0e8bc85846eb62ac";
export const url=new URL("../icons/privacy-fill.svg?v=f80548c49adaf048ac59e6cf1b4afe269fbdff3e154c3c767036259ec2dda2ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
