export const name="art_track-fill";
export const id="dl_4d8f3f6a16477fc20ee0";
export const url=new URL("../icons/art_track-fill.svg?v=ed63f27ac7932c9520f364c45ac2193fca9dde697c03a6d8e96be20b401070ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
