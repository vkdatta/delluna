export const name="lucid_1-circle-chevron-down";
export const id="dl_87cd2d69777049c39e7f";
export const url=new URL("../icons/lucid_1-circle-chevron-down.svg?v=ba15b1665e9f05041fa4cb455ca681916fa7dfcca27aefd79633f804012fffbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
