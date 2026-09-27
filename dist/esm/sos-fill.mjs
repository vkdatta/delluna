export const name="sos-fill";
export const id="dl_2214c85ef6358348ff77";
export const url=new URL("../icons/sos-fill.svg?v=5c631cabce173f722b88357f0951746681f3968d7bcccf8153661dda4dde14a1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
