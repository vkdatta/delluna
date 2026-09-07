export const name="list-heart-bold";
export const id="dl_4fb5cdbe0b5c4dbf9501";
export const url=new URL("../icons/list-heart-bold.svg?v=6bb844498fba31482c08b4bb9ef40cfd2dafa092c316f7d461ece537e7a4285e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
