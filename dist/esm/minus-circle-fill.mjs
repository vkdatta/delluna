export const name="minus-circle-fill";
export const id="dl_8d48ba23883042cca991";
export const url=new URL("../icons/minus-circle-fill.svg?v=177cf007310f44b323b83d3ab62a5e3117dbf405f8bbed9efce8e98956a4748e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
