export const name="move_vertical";
export const id="dl_34085544099b26ab03ec";
export const url=new URL("../icons/move_vertical.svg?v=f5f4291afd33267330ae206079f25ab0642fc93e584f914353c50271e1630a07",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
