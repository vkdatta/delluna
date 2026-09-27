export const name="truck-trailer-thin";
export const id="dl_402a5d8a35222485cf77";
export const url=new URL("../icons/truck-trailer-thin.svg?v=939de8b92a7ac95c5251e3e223c99f77eb5dc9572a8072e71145799a0772af1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
