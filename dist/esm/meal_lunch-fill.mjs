export const name="meal_lunch-fill";
export const id="dl_48bb5bf2ff6b3ba7045a";
export const url=new URL("../icons/meal_lunch-fill.svg?v=00c080ab31ac89f73268edcd9cf42429e0fc5d600d9217d0525def78b8110a4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
