export const name="sync-fill";
export const id="dl_856dace852b97bd30d83";
export const url=new URL("../icons/sync-fill.svg?v=8e7945ee9d5b080161c5c9ff5b2d7f95e2bcd0336cbd02926eeb79da45a7cb8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
