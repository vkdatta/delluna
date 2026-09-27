export const name="lucid_1-circle-stop";
export const id="dl_251b314cb9574b8fbb04";
export const url=new URL("../icons/lucid_1-circle-stop.svg?v=c71482752541c0680bdf7f2280ab034223a15ce7dd023855a2beca0cb9029449",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
