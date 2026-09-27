export const name="ranking-bold";
export const id="dl_ecfab4eacbaa4ef6afbe";
export const url=new URL("../icons/ranking-bold.svg?v=e2d25644daf4eabcc2555abf5cb51381cda8561d8b5700399c216e46da046017",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
