export const name="hand-tap-duotone";
export const id="dl_997c20a812124cea8d27";
export const url=new URL("../icons/hand-tap-duotone.svg?v=8feccc52b2114bbe45df99418fb41cf1f59471fdb18ba0942b0dd9c2ff4c9bfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
