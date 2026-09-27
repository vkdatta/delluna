export const name="cards-three-light";
export const id="dl_6cb79e2d8f654588ba2c";
export const url=new URL("../icons/cards-three-light.svg?v=c2d380ac92411ae1370e872e388c570047581fb8ae8189200a03230e0f909a13",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
