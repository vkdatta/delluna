export const name="four-k-bold";
export const id="dl_56b70b98749743458e05";
export const url=new URL("../icons/four-k-bold.svg?v=c5b51b573e5e76733f68a233d80e72c837a3c970194739353e33dd5d451e15ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
