export const name="intersect-three-light";
export const id="dl_9fc235f932534f4d8ef6";
export const url=new URL("../icons/intersect-three-light.svg?v=c6be38ed7662c20c40e1a60a987324f0fe5d4c60a718989229c6e17af6314bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
