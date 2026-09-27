export const name="rv_hookup";
export const id="dl_5dcacb83388c5da54b5a";
export const url=new URL("../icons/rv_hookup.svg?v=38650481b13517150cfe5a4ae0b4a359d4bc38fc3482e9567ea560b0318ca0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
