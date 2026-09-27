export const name="lucid_1-arrow-right";
export const id="dl_f3ac3d3e9be74cf5a538";
export const url=new URL("../icons/lucid_1-arrow-right.svg?v=0715c2038c5da08b63400a8882205b21598d75e8420134b7beaf46378170afb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
