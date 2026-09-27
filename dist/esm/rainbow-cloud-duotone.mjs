export const name="rainbow-cloud-duotone";
export const id="dl_1eb1078488fd4214be44";
export const url=new URL("../icons/rainbow-cloud-duotone.svg?v=7fb46611fc60e701a94f3fc9ed5207f564c6b668d312cd0fefc64c63c9e5479f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
