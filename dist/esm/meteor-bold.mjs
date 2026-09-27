export const name="meteor-bold";
export const id="dl_3e533192dcec40c1b152";
export const url=new URL("../icons/meteor-bold.svg?v=1ed92a259edd482739358c299c8015672f83c33eb21cc6033ed5062ef2241583",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
