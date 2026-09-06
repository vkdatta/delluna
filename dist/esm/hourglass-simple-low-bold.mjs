export const name="hourglass-simple-low-bold";
export const id="dl_6c74761d7e084c4f9441";
export const url=new URL("../icons/hourglass-simple-low-bold.svg?v=c41a00b27b40e67d742044c8b9b3b1fcc83a876636e423ffa97781deee6d6a8c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
