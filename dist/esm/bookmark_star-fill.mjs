export const name="bookmark_star-fill";
export const id="dl_6550811a7c2f05acccb8";
export const url=new URL("../icons/bookmark_star-fill.svg?v=f7ce3c0e2c09fa8cc3c41350e4430f0d781cd90519aa6051096da961266b5b12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
