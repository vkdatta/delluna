export const name="circle";
export const id="dl_78d3e9d0a54c487e994c";
export const url=new URL("../icons/circle.svg?v=efc9ee22b165d0d40c21b1c5ebe2463c99744af44ab6f530b4d6c44f25181974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
