export const name="heart-duotone";
export const id="dl_588ec46e8741403898cb";
export const url=new URL("../icons/heart-duotone.svg?v=4743ee094d7d1d4a72f1b6b169b7ab5dab7d84241c028c530f66d37fe6f875af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
