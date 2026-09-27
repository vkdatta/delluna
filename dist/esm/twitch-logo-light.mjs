export const name="twitch-logo-light";
export const id="dl_a29033a0224b1e1d7ca6";
export const url=new URL("../icons/twitch-logo-light.svg?v=c28dd1843274ec56ab9cc114b98bb1c1185ce0629c1f36eac7caa736ff763b2a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
