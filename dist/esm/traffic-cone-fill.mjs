export const name="traffic-cone-fill";
export const id="dl_09064f3f88d4188d2c3e";
export const url=new URL("../icons/traffic-cone-fill.svg?v=9f7e735e4e8dcccb8d7d94328b03e5209fce6a1a28917072832ffaef11426051",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
