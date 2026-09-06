export const name="hand-pointing-light";
export const id="dl_739685b14bfa410a92a1";
export const url=new URL("../icons/hand-pointing-light.svg?v=575ccc9fc021791101f896b50d3a2bf9ed1dbaff4c936295dd49c937c2252599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
