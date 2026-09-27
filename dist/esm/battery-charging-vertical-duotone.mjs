export const name="battery-charging-vertical-duotone";
export const id="dl_9aaedce1a5e443ae94c9";
export const url=new URL("../icons/battery-charging-vertical-duotone.svg?v=c45d4bdb1167fe29660441fc1876b0eae793f6394fb1250a49a212fbb5bd2dec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
