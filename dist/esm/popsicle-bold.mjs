export const name="popsicle-bold";
export const id="dl_b11efeceecd24a5aabf5";
export const url=new URL("../icons/popsicle-bold.svg?v=8903cc0ab8c2ed0ef39e75755d13880b7866c2a1ffccce0b44c50c7854bcbb9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
