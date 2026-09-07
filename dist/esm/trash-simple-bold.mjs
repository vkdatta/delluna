export const name="trash-simple-bold";
export const id="dl_0958a2b35506475dbb16";
export const url=new URL("../icons/T/trash-simple-bold.svg?v=f6bfdc0fe67c4bad69e6dfcf91b3123aa37dc5d4232694fecf888aa5c2783589",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
