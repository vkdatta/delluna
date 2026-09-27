export const name="looks_4";
export const id="dl_84f05b851d58c8c75124";
export const url=new URL("../icons/looks_4.svg?v=3384a97bbc94dd7761d5d893058788465f5cdc7309a1448ceeec5f62e5c40458",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
