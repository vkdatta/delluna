export const name="heart_plus-fill";
export const id="dl_d8760024dd5fa2e4c9e7";
export const url=new URL("../icons/heart_plus-fill.svg?v=2c0cec604cac88beaddb42e506935069b4ab19f8b3ef175d72acc672787a34a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
