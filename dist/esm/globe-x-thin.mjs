export const name="globe-x-thin";
export const id="dl_39c6235b6f684337b008";
export const url=new URL("../icons/globe-x-thin.svg?v=24365b0aae7ee275d2b3cf282dc8ddf6c61264d51636dbf9037f3ce84f5f3a27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
