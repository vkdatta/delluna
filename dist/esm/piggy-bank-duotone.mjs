export const name="piggy-bank-duotone";
export const id="dl_996edf8b98de451dbfae";
export const url=new URL("../icons/piggy-bank-duotone.svg?v=1a869ce052d5966ccc2ef14d527d963fc0d4c83356f1c1516e6144d35b851f1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
