export const name="vr180_create2d";
export const id="dl_86da0044dbf64d4a9311";
export const url=new URL("../icons/V/vr180_create2d.svg?v=72a999fd9c1ad9ec63327782c531577d8bfb708dc7182c40661d2604deed187a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
