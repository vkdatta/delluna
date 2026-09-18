export const name="watch_wake";
export const id="dl_9e91bb7146b84de8b1fc";
export const url=new URL("../icons/watch_wake.svg?v=1bdf824fca264b1fd788fc250f92223ca717925ae97d9a7ae22d356c205c48eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
