export const name="cards-three-light";
export const id="dl_6cb79e2d8f654588ba2c";
export const url=new URL("../icons/cards-three-light.svg?v=b12b132dfac7bdc4a9f4cdc62b516d251e7c4be3141a7e8be0c635de9c87cebb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
