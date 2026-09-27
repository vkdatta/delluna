export const name="cards_stack-fill";
export const id="dl_8a657df198c5060ce615";
export const url=new URL("../icons/cards_stack-fill.svg?v=26bd1bac77ca6e89bbe17d4559b0fce098c47a01f624c979f5f78f996158c1f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
