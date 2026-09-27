export const name="bell-simple-z-fill";
export const id="dl_71f69718c5e44adea562";
export const url=new URL("../icons/bell-simple-z-fill.svg?v=b8444f01b620643bac4739cb0583d722d3c84f13085fc80b32b9ddd45aaa8bf9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
