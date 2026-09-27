export const name="dot-bold";
export const id="dl_bbc10d4b25544718852b";
export const url=new URL("../icons/dot-bold.svg?v=2926ab74f651254c3e217cc7fcd56ed1bc1a6bc9de80d61b2b39879857e86d6f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
