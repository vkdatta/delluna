export const name="dots-nine-bold";
export const id="dl_71679cf931b044f09d8a";
export const url=new URL("../icons/dots-nine-bold.svg?v=e89cd4a48060b859303a66ae6a2aab4ae2184af9a94fb95d5a99b99d3ef1c59c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
