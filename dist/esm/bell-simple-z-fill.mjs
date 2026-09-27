export const name="bell-simple-z-fill";
export const id="dl_71f69718c5e44adea562";
export const url=new URL("../icons/bell-simple-z-fill.svg?v=194fe971c01c1e66456a027e45c524fc9f2dc5317e23e99bd2ae6d7dadc605b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
