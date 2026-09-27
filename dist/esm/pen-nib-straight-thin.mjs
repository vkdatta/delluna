export const name="pen-nib-straight-thin";
export const id="dl_9ec3a4f524874d9285f4";
export const url=new URL("../icons/pen-nib-straight-thin.svg?v=0e52b4ad0ac6f7cdb51579012cb127185f726010ce20465c9e1eb09c47d8346a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
