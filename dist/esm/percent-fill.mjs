export const name="percent-fill";
export const id="dl_29008494365f43cebe29";
export const url=new URL("../icons/percent-fill.svg?v=d8b0ea92a76ea3d8ece4a4f6d35c4e2d3125c8c3632eede701ea6def7b079812",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
