export const name="photo";
export const id="dl_e9bbd20264431fe2b7c0";
export const url=new URL("../icons/photo.svg?v=df960c9bfe385d6633c5f048dc7480f68755d5676d5eba4c01568640f1da3994",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
