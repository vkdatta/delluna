export const name="mobile_sound";
export const id="dl_a2680d156eeddd2f313a";
export const url=new URL("../icons/mobile_sound.svg?v=e1f058bb43cf391aebb498ba20bcb3a5968a66a49305cf372ae5059897a2ea76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
