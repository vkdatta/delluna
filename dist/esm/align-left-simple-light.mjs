export const name="align-left-simple-light";
export const id="dl_17bb2d2be8e44f278688";
export const url=new URL("../icons/align-left-simple-light.svg?v=11c3e159de5dc4f7515ff2d780cfbe7eeb3bc7a4437e1109b3c3bbc7c0e0258b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
