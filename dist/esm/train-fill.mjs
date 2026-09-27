export const name="train-fill";
export const id="dl_41242fdc09544e5d8277";
export const url=new URL("../icons/train-fill.svg?v=1090ba9c87eeb9c54bc6caee3e46d6cfe73189bb51cc64df5d63d14957ff9ecc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
