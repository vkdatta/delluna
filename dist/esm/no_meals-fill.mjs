export const name="no_meals-fill";
export const id="dl_9178c23c57d642a98a46";
export const url=new URL("../icons/N/no_meals-fill.svg?v=6c120bff40b5e40dd66afab6ddf0d2915bb644dd67d08066c94861a9d7633669",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
