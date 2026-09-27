export const name="hangout_video_off-fill";
export const id="dl_d91c47a57aa58b28134c";
export const url=new URL("../icons/hangout_video_off-fill.svg?v=8abbd669304448470d4e88c007efbd7393959e0a652982e9857a82fceef3131a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
