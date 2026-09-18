export const name="rib_cage-fill";
export const id="dl_55595906bb2745e5bb97";
export const url=new URL("../icons/rib_cage-fill.svg?v=4716c8b6b5ba1b6aefcf19988d5a4344e03c54a4e7b3521bbd7d3c588de6dea3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
