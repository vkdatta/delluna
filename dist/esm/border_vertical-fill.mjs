export const name="border_vertical-fill";
export const id="dl_3fad69ce51464424a818";
export const url=new URL("../icons/B/border_vertical-fill.svg?v=c4a91d53e1efcebf93453857228c91448f5d192ea7a0f1d2a129c193423ad0bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
