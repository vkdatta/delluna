export const name="expand_less";
export const id="dl_47f77e91c0346c6983bb";
export const url=new URL("../icons/expand_less.svg?v=cbd8cdc7a2d8dbbad1366aa0d9b6ed90541d7e8b2b647439c353bbfa21bf188e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
