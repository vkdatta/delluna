export const name="lucid_3-playing-cards";
export const id="dl_5efcaf8fb53e4b49ac85";
export const url=new URL("../icons/lucid_3-playing-cards.svg?v=aefa504d8ebb24959b27a4099e0151f706a9205f5ca2f94f1f8c0a8ac23b3259",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
