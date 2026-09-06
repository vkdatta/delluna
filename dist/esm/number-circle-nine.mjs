export const name="number-circle-nine";
export const id="dl_f37cdc4fe69f441194fc";
export const url=new URL("../icons/number-circle-nine.svg?v=da06cf2b764d1df19956dabfabeaa172278f1a48c60d6a261f784dae054fd524",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
