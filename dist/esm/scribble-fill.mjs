export const name="scribble-fill";
export const id="dl_aadbedb321f2ec3f9316";
export const url=new URL("../icons/scribble-fill.svg?v=67d604e3f1c3564c599a125cca5003a346443a81aa7b525317f1c82c9e7a2dc1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
