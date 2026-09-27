export const name="bug-droid";
export const id="dl_ecf99eade5ed40b5977c";
export const url=new URL("../icons/bug-droid.svg?v=9185f05c4da8c702911db2df42eafd6d948d82fc91fb025441d97bd95ec18145",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
