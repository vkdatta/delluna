export const name="trolley-suitcase-fill";
export const id="dl_75b00d6c016faf7cfceb";
export const url=new URL("../icons/trolley-suitcase-fill.svg?v=f4467ebd87b4164186b5db2e1f924a5db7dab48f2958e601cf865b0add1af5cc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
