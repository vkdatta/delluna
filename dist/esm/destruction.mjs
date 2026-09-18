export const name="destruction";
export const id="dl_bdb8aad00b2f4a8089c4";
export const url=new URL("../icons/destruction.svg?v=215ce91bb1328ce3054169aa5f1b50856f5a26c6ea40569162af1e87a37ec601",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
