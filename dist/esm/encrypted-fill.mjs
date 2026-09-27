export const name="encrypted-fill";
export const id="dl_d93db500f2ced724f6b2";
export const url=new URL("../icons/encrypted-fill.svg?v=c79e937b0c9920d7ba1db68bf71d5da64dfac4fbe19b820b131d1848dbb9744a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
