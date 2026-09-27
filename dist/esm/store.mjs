export const name="store";
export const id="dl_3d80b7d66e614b07b9b2";
export const url=new URL("../icons/store.svg?v=c74efa62b1ed90f613df9f5c4a422ccf6983b2ca83e3f24ddad767c218434b80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
