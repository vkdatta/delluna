export const name="chair-fill";
export const id="dl_c4de70eeb3684a7ca2f5";
export const url=new URL("../icons/chair-fill.svg?v=a8a65e4f9c1cbf4a7c6108cc89421c3eaa7af6ebea22008f8b8b46820f0862a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
