export const name="antigravity";
export const id="dl_dad18fa443e81a355331";
export const url=new URL("../icons/antigravity.svg?v=1a1e7fc7c5a813e0722358eef46fe10de9c0f76c120ee8619a54f8994db2a5fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
