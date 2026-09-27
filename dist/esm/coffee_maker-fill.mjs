export const name="coffee_maker-fill";
export const id="dl_ddbe9cc3a8657631cd4a";
export const url=new URL("../icons/coffee_maker-fill.svg?v=5c293884429242bf30f45e56b625afdd141cf1713cd4f3b7b6cd8c94a9414579",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
