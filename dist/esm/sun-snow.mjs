export const name="sun-snow";
export const id="dl_c9607f4f5f9f49beab6f";
export const url=new URL("../icons/sun-snow.svg?v=f86d78a3c4b5fc479b41f1a304f3c8677b0ed67eb4ae4a3c5a8d3b3ed7767337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
