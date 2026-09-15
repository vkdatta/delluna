export const name="fastfood";
export const id="dl_63c9893bb6e14a34a16c";
export const url=new URL("../icons/F/fastfood.svg?v=72ee9707435c7b43c4c415f39df25eb193dca4764b59a9d3f5056819085310d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
