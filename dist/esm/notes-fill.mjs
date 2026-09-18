export const name="notes-fill";
export const id="dl_a0a1774a426f4942b48c";
export const url=new URL("../icons/N/notes-fill.svg?v=a3707b2e0359723e3bfeb645a34d8b15729391092528a2d1fd1a864045bb2978",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
