export const name="wheelchair_pickup-fill";
export const id="dl_91b4255570e15ae887fd";
export const url=new URL("../icons/wheelchair_pickup-fill.svg?v=0dd09735fc74cc1250a847c98abba09f50392fa6ce60d9027e6bf0e3628a897d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
