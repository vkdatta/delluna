export const name="park-thin";
export const id="dl_4cf5525c8dde42b9be45";
export const url=new URL("../icons/park-thin.svg?v=5516adfdf4bfeb6678a41bd30c617b15cf6285bfde3661e82919e80368a7bd5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
