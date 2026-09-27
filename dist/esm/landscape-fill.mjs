export const name="landscape-fill";
export const id="dl_fa93c4441efd04f3b691";
export const url=new URL("../icons/landscape-fill.svg?v=075ceef02f19d5a7d2126c6d8cb089e4c873180682ebc603954d27d3f6b53b5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
