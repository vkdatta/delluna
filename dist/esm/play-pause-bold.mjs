export const name="play-pause-bold";
export const id="dl_f872186e3293446bbe9b";
export const url=new URL("../icons/play-pause-bold.svg?v=a92ad554959499503c91aea28850d01b5e7e243a234ee6686265670d0bb826e2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
