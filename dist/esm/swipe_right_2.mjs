export const name="swipe_right_2";
export const id="dl_9cd153bd182993321032";
export const url=new URL("../icons/swipe_right_2.svg?v=6825926bba27539de1f4369dc807b0090360a8c0d636fc0c0e367ec081de3dba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
