export const name="coffee-bean";
export const id="dl_e40acac1d4ce4e34865d";
export const url=new URL("../icons/coffee-bean.svg?v=d061bc1f600f09dd26a7148e9728eb6babe7ffad6d2551da3d7a9b16a8a78d21",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
