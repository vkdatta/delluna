export const name="cake-thin";
export const id="dl_8b410cacfa3a477abc7c";
export const url=new URL("../icons/cake-thin.svg?v=766b20d89b5615f677ab9abbc654c9e93409b4483306dfb6a9d541f3a6493e92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
