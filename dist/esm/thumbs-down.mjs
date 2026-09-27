export const name="thumbs-down";
export const id="dl_3da75e7629fc4d62bd1c";
export const url=new URL("../icons/thumbs-down.svg?v=7dedae4179b744f7df7deb5d3d814a75418da56217b0eee99e0fb131d7e3857e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
