export const name="threads-logo-bold";
export const id="dl_61e25a12acc841f7bf74";
export const url=new URL("../icons/T/threads-logo-bold.svg?v=d3d978e9dff5cd1815ade3a3aee4a920300c4be04b2248baf59083b3874ed748",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
