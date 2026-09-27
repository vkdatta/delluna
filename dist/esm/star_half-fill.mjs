export const name="star_half-fill";
export const id="dl_d1e5cc75fd4792c58535";
export const url=new URL("../icons/star_half-fill.svg?v=ec44501c6dab116b041e6350c76ad33954634bbaacdfee9f2942851e7dfc9a28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
