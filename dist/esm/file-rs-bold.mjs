export const name="file-rs-bold";
export const id="dl_a1df0a52c1024307877c";
export const url=new URL("../icons/file-rs-bold.svg?v=a777a2d3e3772c92d81b791fac20de0abb5dbea2419c9de9cfceff66e25e0fa3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
