export const name="google-cardboard-logo-bold";
export const id="dl_2d8675bdb0bc45a284f8";
export const url=new URL("../icons/google-cardboard-logo-bold.svg?v=9cbef361a72aaef59b49feb14c14cb8a8a272189fca6c44c7d81565d3ca5e6a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
