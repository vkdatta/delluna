export const name="utensils-crossed";
export const id="dl_47c46a9a65504c069a8e";
export const url=new URL("../icons/utensils-crossed.svg?v=f942e01df7e6f5a2c5ddaeebd432863747716762850c991d4a1381bf3ac096c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
