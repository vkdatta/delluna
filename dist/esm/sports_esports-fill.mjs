export const name="sports_esports-fill";
export const id="dl_ef717f4b771f5101c150";
export const url=new URL("../icons/sports_esports-fill.svg?v=71c5e8c27de0e47c0a50b9d1f08ab69a4904d6099a7f0cbe071f93422313a258",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
