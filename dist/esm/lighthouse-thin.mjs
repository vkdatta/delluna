export const name="lighthouse-thin";
export const id="dl_b30a12d89f094fd69501";
export const url=new URL("../icons/lighthouse-thin.svg?v=b7b300ddeff80cdd3d1a472e3bc648a8736f908aa06d8e8d892584c0c3d40c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
