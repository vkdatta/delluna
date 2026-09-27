export const name="hangout_video";
export const id="dl_cc39266bd3284d8a7b8c";
export const url=new URL("../icons/hangout_video.svg?v=eb34f8a75fc7d652d0057fcbaaa47442b42a7b0268aa827cb87b5f2371032d93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
