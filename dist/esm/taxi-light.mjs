export const name="taxi-light";
export const id="dl_6cb9369de151da1dec37";
export const url=new URL("../icons/taxi-light.svg?v=f335048e78673804092d0adfc54ef48d019f549ccb9575afb2db27506651d418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
