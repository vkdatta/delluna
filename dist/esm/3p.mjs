export const name="3p";
export const id="dl_ed99bff51f9f37452e71";
export const url=new URL("../icons/3p.svg?v=ca37b9e8e1b28cae09a6d8938ca0315a7c2a79a3eb19af0eb3dc7adea203c21c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
