export const name="toilet-duotone";
export const id="dl_cb70ea312c9742748317";
export const url=new URL("../icons/T/toilet-duotone.svg?v=47a6d601f6a54924ebfff39ffe5bacfe009b40587dfb7787c52d80bc2e9ff0a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
