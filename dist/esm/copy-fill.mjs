export const name="copy-fill";
export const id="dl_f169698966cd433c88d0";
export const url=new URL("../icons/copy-fill.svg?v=2cdb8cc75fe9c7c9fd27e85af8aae3353737cbf4523b370b09cd2e5e7246035b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
