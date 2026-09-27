export const name="poker-chip-fill";
export const id="dl_695ba006b4a54f1d9928";
export const url=new URL("../icons/poker-chip-fill.svg?v=df7efcda9a6f6fbe08dd020e36fb5e142d767e416cdbef56938bdbaa1bbf8257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
