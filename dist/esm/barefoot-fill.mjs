export const name="barefoot-fill";
export const id="dl_581d3e401302a0a20e71";
export const url=new URL("../icons/barefoot-fill.svg?v=59d0e8ae39f0cdb3142cf0ff3eded3952cb75d06af0d06a8fcc136bb8a9a3b6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
