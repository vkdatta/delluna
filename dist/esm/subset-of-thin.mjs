export const name="subset-of-thin";
export const id="dl_4beff9f1163fe9d5db37";
export const url=new URL("../icons/subset-of-thin.svg?v=020e74e77acb31e8e31f17a747d6b108b08e3e92ee188b942555e8ef0cd2b4b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
