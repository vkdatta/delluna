export const name="dots-three-vertical-duotone";
export const id="dl_3c0a77ab4d5e45e18a46";
export const url=new URL("../icons/dots-three-vertical-duotone.svg?v=3e42944e58a2daf0a64f1fc1dbd848f5e9a99e312241ca9b2042ddba4c6e71a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
