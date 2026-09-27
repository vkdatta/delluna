export const name="lightning-a-fill";
export const id="dl_919bde2ab54f4548be30";
export const url=new URL("../icons/lightning-a-fill.svg?v=a52787001ee5e8cdbc5570eb523f97ad1136e7dfe9901ffa7a7614b2249a44ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
