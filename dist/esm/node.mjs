export const name="node";
export const id="dl_6f2421a552c3431c871d";
export const url=new URL("../icons/node.svg?v=5761526e56c4f768e24ab6ae747bc507851080e632647483a982ca956457d1c0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
