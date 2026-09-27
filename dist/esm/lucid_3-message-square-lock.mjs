export const name="lucid_3-message-square-lock";
export const id="dl_880050a685504be9ba61";
export const url=new URL("../icons/lucid_3-message-square-lock.svg?v=3becee8d17b710d54541afdbd505449623ae5613ffd563ffec84a9dc3a03121c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
