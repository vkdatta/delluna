export const name="bowl-food-fill";
export const id="dl_32d034d71a474c548016";
export const url=new URL("../icons/bowl-food-fill.svg?v=ef8174e2d83784d199ba48c022da9f082ec02ea62ca30e3b1a4b7a3dc7034b16",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
