export const name="terminal";
export const id="dl_8e1aed98f87a4c00b81c";
export const url=new URL("../icons/terminal.svg?v=922498c103cba0e969aeca184cdb10c98d4093f3d37da2468be9d38af4a97d47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
