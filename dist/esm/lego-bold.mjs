export const name="lego-bold";
export const id="dl_bd2068ce85ff43ab82b8";
export const url=new URL("../icons/lego-bold.svg?v=649b5adfcb04a873e0dd113c8cf2f4df56a91911bb07b71d234241017de70f32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
