export const name="lucid_2-ellipsis";
export const id="dl_3cc1859898ab4eaaaa2a";
export const url=new URL("../icons/lucid_2-ellipsis.svg?v=943587d9302ab068eec91154d8a3efb71421509d49c899e52e1afa705714ab92",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
