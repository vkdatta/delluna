export const name="hangout_video-fill";
export const id="dl_63c361234f564447a4ca";
export const url=new URL("../icons/H/hangout_video-fill.svg?v=074111842965672dbfc9ec7850ae42769919a629e0f511f9428b41beb3b3405b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
