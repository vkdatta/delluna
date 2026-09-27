export const name="diversity_1";
export const id="dl_8ccc20a141fde9a25f2e";
export const url=new URL("../icons/diversity_1.svg?v=0d9cf0f7d0b589dd2c96daadc7fdfc20a891e076f98f4cf5d2278febbd4e0acd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
