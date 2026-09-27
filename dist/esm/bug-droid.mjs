export const name="bug-droid";
export const id="dl_ecf99eade5ed40b5977c";
export const url=new URL("../icons/bug-droid.svg?v=b2564e4514df0e1acddb660ec556d771304975b965fd4693910adcb48cf38c50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
