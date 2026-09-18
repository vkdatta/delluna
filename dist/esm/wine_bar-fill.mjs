export const name="wine_bar-fill";
export const id="dl_880f2784a06e42a08a46";
export const url=new URL("../icons/W/wine_bar-fill.svg?v=98b9bb3d0aadda43f432c6550e5f3c30ca786eeb6fa6a9c50f3ae6f18154e2d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
