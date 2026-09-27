export const name="lucid_1-bookmark-off";
export const id="dl_7e9f4cd3736e4528b550";
export const url=new URL("../icons/lucid_1-bookmark-off.svg?v=3da373e96aae6c245ce574f55dcae600d6979f00249bd7722fab25427a525848",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
