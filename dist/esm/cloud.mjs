export const name="cloud";
export const id="dl_e9d1dfb9648a4461904c";
export const url=new URL("../icons/cloud.svg?v=3758829f1a5d2fccf15641c97fb8e5a872d77780c1dcf3d076347f22e346cd54",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
