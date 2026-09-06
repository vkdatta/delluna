export const name="beer-bottle-bold";
export const id="dl_3ded1a1f609d4a3e9645";
export const url=new URL("../icons/beer-bottle-bold.svg?v=bb6c1fc14f15b69102dec1707e5429391354fa777bf76722d949feaab6a7c9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
