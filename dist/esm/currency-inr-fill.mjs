export const name="currency-inr-fill";
export const id="dl_89b0194a2e5e4e97959d";
export const url=new URL("../icons/currency-inr-fill.svg?v=0accbee55a9359bd06efec9995121fff1d7dd87ef670cc65baf2f441d1346508",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
