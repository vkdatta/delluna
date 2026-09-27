export const name="greater-than-thin";
export const id="dl_3ae3dcc3f92a418fb68d";
export const url=new URL("../icons/greater-than-thin.svg?v=b7d32ec67265e9d7edda6cf09d6df51bc35169e95d1c9bf75380a4f4d975ff26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
