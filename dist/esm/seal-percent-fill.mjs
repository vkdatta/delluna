export const name="seal-percent-fill";
export const id="dl_2cb906f365fa42ccc1fa";
export const url=new URL("../icons/seal-percent-fill.svg?v=9dded8099e5122a6fde22d91e63455398772188afb8210d6c9f91b6aad98193f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
