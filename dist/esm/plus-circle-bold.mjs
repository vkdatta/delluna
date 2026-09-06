export const name="plus-circle-bold";
export const id="dl_9067c8fdb2de416cafad";
export const url=new URL("../icons/plus-circle-bold.svg?v=ea66e21d33855475406aad71a2ea1d16b79b467ac1753d2788cb84c76fc6cc11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
