export const name="dry_cleaning";
export const id="dl_3c040486912da09514b6";
export const url=new URL("../icons/dry_cleaning.svg?v=75db184b5cbea6346074020e79e5ed57ee02bfc15a4f8af7f47a82f843430082",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
