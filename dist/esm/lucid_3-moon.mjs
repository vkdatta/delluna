export const name="lucid_3-moon";
export const id="dl_ce6f4f2ede144bd9a5d0";
export const url=new URL("../icons/lucid_3-moon.svg?v=b4b8f183d99821ed537d06364738d6ed47ab1b4aba9e40a863bcdb9c7d56a552",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
