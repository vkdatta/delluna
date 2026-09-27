export const name="caret-circle-double-left-bold";
export const id="dl_5893d34c9a914dfe9f19";
export const url=new URL("../icons/caret-circle-double-left-bold.svg?v=915e99ea33c0a102f67dedab06043110610143797948e018b6f2e6e1b37aaf2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
