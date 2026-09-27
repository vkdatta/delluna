export const name="list-heart-bold";
export const id="dl_4fb5cdbe0b5c4dbf9501";
export const url=new URL("../icons/list-heart-bold.svg?v=afcc07ef8516281117dcd612f0cb22e7f9e79a6b07516c43f4326f8e6257a6bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
