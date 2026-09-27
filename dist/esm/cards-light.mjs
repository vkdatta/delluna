export const name="cards-light";
export const id="dl_0189d7aea1184414ae85";
export const url=new URL("../icons/cards-light.svg?v=239b5c7ea1ee150c86bf4725bcda7eabfe930338d1ac08a01f190a94746757fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
