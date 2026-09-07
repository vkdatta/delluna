export const name="spotify-logo";
export const id="dl_eb456ea7799f4101b536";
export const url=new URL("../icons/S/spotify-logo.svg?v=200956e4a7bd825533313d81e6fd09e246e76967c4136d9e5e7fbce9eedb9e79",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
