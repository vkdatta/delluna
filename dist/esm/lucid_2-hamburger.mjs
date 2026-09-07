export const name="lucid_2-hamburger";
export const id="dl_69181a2999ae450ba230";
export const url=new URL("../icons/lucid_2-hamburger.svg?v=301183b248b706691b7b791bf0c5c48c73193758c4083d4e923013fd8ae84c73",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
