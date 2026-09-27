export const name="remote_gen-fill";
export const id="dl_16b840be4c77d4013ce4";
export const url=new URL("../icons/remote_gen-fill.svg?v=7120e9bc148b0ed7f8d56574ebedc88525c8eee4c14e29873b9241c77ec8115e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
