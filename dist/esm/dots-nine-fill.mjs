export const name="dots-nine-fill";
export const id="dl_359188b27a284f66a434";
export const url=new URL("../icons/dots-nine-fill.svg?v=60b7011a069696333b5e5ee5580fade8daa9359bfc62a9524ca41403a774f79a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
