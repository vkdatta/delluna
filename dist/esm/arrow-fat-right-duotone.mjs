export const name="arrow-fat-right-duotone";
export const id="dl_cf6328e139b14391b81b";
export const url=new URL("../icons/arrow-fat-right-duotone.svg?v=3f7a17d0a663d603e92651ba0220cfbfaa5f996217b6e61fd6b7d06d45ee5f82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
