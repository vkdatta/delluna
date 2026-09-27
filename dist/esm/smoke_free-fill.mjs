export const name="smoke_free-fill";
export const id="dl_912c786e206da2607878";
export const url=new URL("../icons/smoke_free-fill.svg?v=e9c44d35fddbf8f4ef5bba0546baec1c2bebdace3d18f7fa3e1fa5c784ba7a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
