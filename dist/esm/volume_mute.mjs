export const name="volume_mute";
export const id="dl_345bd26708d0fbeb59a3";
export const url=new URL("../icons/volume_mute.svg?v=0b4fd1b07c98a2982a709cc8b37e5129553bcd8e92412904486d3dd0abc0f426",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
