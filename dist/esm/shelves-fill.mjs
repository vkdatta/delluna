export const name="shelves-fill";
export const id="dl_338321596fa53e847e77";
export const url=new URL("../icons/shelves-fill.svg?v=690e452d09d449c947788e7ddb6ea4375137641e11d41a524391e26cba744479",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
