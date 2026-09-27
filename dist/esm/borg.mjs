export const name="borg";
export const id="dl_d3a7a26a19d9a883412f";
export const url=new URL("../icons/borg.svg?v=9344686f9d3a4ffc7d9ca47269ed65a11c83d7edd43f804614227650a6029b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
