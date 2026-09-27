export const name="tour";
export const id="dl_643058a62e51b0d9868a";
export const url=new URL("../icons/tour.svg?v=fa0253072131ea3a0d2a07d3c939304f484714d77271aa8992362e829e67186e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
