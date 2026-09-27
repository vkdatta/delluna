export const name="transgender";
export const id="dl_3802ddf7cb2a418b8445";
export const url=new URL("../icons/transgender.svg?v=4dade876e500f4148787ca601f6a52296f6f090d45c97c5b3575e378ada026dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
