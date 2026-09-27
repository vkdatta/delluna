export const name="speaker-simple-slash";
export const id="dl_d90eef3f6d5ece94e230";
export const url=new URL("../icons/speaker-simple-slash.svg?v=eb7dc1dffde1c39a0961de42ee1ec52bc14ede540b511d73d079000e777478f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
