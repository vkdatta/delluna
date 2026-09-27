export const name="knife-fill";
export const id="dl_170c042f2dad4407a4e0";
export const url=new URL("../icons/knife-fill.svg?v=693a66e092683e15af86e5381d0281333791cef236d570544c3f3ad67f6e4242",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
