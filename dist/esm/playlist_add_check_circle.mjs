export const name="playlist_add_check_circle";
export const id="dl_934fcd50e2dcab216323";
export const url=new URL("../icons/playlist_add_check_circle.svg?v=090f15f47603131c4a8915f3da0428349b5997e1db277b40371bce0408a6a5ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
