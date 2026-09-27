export const name="shelves-fill";
export const id="dl_0d32e743e7a9d7dd3ef5";
export const url=new URL("../icons/shelves-fill.svg?v=764e9c5fd56473d1d7067cdeb90e349e414740dabe346be313d9c2f05f3a3299",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
