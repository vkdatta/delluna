export const name="lucid_1-circle-ellipsis";
export const id="dl_571c3514039442dc82f8";
export const url=new URL("../icons/lucid_1-circle-ellipsis.svg?v=de907830747ac87468d7943fdaf11c300dac16ade80c209fe2eb1d98e91846ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
