export const name="iframe_off-fill";
export const id="dl_cfee16d16e2bf7cecebd";
export const url=new URL("../icons/iframe_off-fill.svg?v=4b6cd911bdb2319eb4f9fdbf0ad582338eaa90e76fafa3367477cc31c5a56547",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
