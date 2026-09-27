export const name="no_meals-fill";
export const id="dl_873dfbe6f69613484d41";
export const url=new URL("../icons/no_meals-fill.svg?v=93841281ffcbfc9cd74ce8901252d3551be322a5cd9e73f42757bef644873a65",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
