export const name="bowl-steam-bold";
export const id="dl_1fd3849a83444835bde1";
export const url=new URL("../icons/bowl-steam-bold.svg?v=c6cd6a86434af43b22f5045f3c88f37ea1cd86bc4758909a9c1fe43f25da2668",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
