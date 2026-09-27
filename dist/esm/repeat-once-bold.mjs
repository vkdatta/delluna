export const name="repeat-once-bold";
export const id="dl_0bdb4063593d49fdba5d";
export const url=new URL("../icons/repeat-once-bold.svg?v=a026aa0cfce97543bc61692fd7fd9500397685672bb95df94b79a1f9b3a13d0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
