export const name="emoji_nature-fill";
export const id="dl_9f59aab4cb63098f00b0";
export const url=new URL("../icons/emoji_nature-fill.svg?v=cfbbf1aa831360a0e6ee9d8b9af8443d60ca28f8376de69de2203213b877207d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
