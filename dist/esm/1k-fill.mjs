export const name="1k-fill";
export const id="dl_55fa96f47f69c4479a92";
export const url=new URL("../icons/1k-fill.svg?v=72c5fa7a820269ab2e71899563a852742f26acf11d0ef6e3e2623cbb8e194fc8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
