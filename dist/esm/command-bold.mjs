export const name="command-bold";
export const id="dl_9658d40975b840219427";
export const url=new URL("../icons/command-bold.svg?v=5a12a20a5cd78f691eae12f3a25d8ff78803cea7ae7fe5d5cfb1ce21c1904e4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
