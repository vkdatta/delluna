export const name="id_card_2-fill";
export const id="dl_75e607a8e29168ada630";
export const url=new URL("../icons/id_card_2-fill.svg?v=90a4d82582640f727a6b8031858c5d40e0929e42814f6f18806cce15854221df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
