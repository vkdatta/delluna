export const name="lucid_1-box";
export const id="dl_708f51ff24dd44d1918d";
export const url=new URL("../icons/lucid_1-box.svg?v=61bd24d24d2500cf4877c28d0d17d05bed6e62f34b202e4cdac4384f9c9fbca6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
