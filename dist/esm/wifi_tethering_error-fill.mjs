export const name="wifi_tethering_error-fill";
export const id="dl_541135b995b9658d09a6";
export const url=new URL("../icons/wifi_tethering_error-fill.svg?v=1a20958a84ab12d186c79c74dd399df2eb0884ff21f29f33cea268d752358bf3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
