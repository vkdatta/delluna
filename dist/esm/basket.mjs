export const name="basket";
export const id="dl_0d3d4bf1fd784077b842";
export const url=new URL("../icons/basket.svg?v=c103bb5890ba0ee7889d6ad1cd2546435b0e3bb663da074633deac54ea6ce664",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
