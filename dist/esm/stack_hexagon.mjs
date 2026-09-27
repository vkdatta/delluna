export const name="stack_hexagon";
export const id="dl_0ea41584db1f40f00c62";
export const url=new URL("../icons/stack_hexagon.svg?v=8eec26ccde066c77869db95ca12ba91828934190e80b5d356453dd17f7e25436",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
