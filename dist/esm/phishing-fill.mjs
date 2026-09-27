export const name="phishing-fill";
export const id="dl_a0ff16963420c52ced9d";
export const url=new URL("../icons/phishing-fill.svg?v=0be34f9d09c56df00b2a296bbb5f5994077a5f14cfe3ad8b161678ccd1d6da2f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
