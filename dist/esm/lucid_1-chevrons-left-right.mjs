export const name="lucid_1-chevrons-left-right";
export const id="dl_b2fd1af1176e4b199c6b";
export const url=new URL("../icons/lucid_1-chevrons-left-right.svg?v=258fa13dca33c5373a67dc75a2a3178fbf9135dec45deeccfc7b3d5a7ca755a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
