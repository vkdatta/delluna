export const name="enable-fill";
export const id="dl_56bfda16b438d022e2ac";
export const url=new URL("../icons/enable-fill.svg?v=b0cbf67c88d9b0c57d80192aa661ba54118855ae57fc8be89d9bf5b40fe694b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
