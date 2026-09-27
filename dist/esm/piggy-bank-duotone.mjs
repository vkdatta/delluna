export const name="piggy-bank-duotone";
export const id="dl_996edf8b98de451dbfae";
export const url=new URL("../icons/piggy-bank-duotone.svg?v=edf4d251d743376fb4437941d87067d60eb333dbca40445be7cdbed86283294d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
