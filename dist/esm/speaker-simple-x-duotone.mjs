export const name="speaker-simple-x-duotone";
export const id="dl_c98dd9ddb2b173aebfaa";
export const url=new URL("../icons/speaker-simple-x-duotone.svg?v=6d99cf2678488653eb20c2804b88398cbe10d8cdfd052dfea6dc2014a4864873",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
