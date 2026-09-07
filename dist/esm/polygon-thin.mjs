export const name="polygon-thin";
export const id="dl_ba06ee06efc247cf9a80";
export const url=new URL("../icons/polygon-thin.svg?v=6b35712efab1715425957cf2be6f411320135aa0de932450fe25fd236f9e3053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
