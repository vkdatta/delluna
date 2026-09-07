export const name="paint-bucket-fill";
export const id="dl_47839f8644084aa3b382";
export const url=new URL("../icons/paint-bucket-fill.svg?v=a0837fb7b12f75a88aefd903532952423f94d264a1618610dc0733725e2302e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
