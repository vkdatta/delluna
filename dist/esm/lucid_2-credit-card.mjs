export const name="lucid_2-credit-card";
export const id="dl_7ac68abdf83f4762862e";
export const url=new URL("../icons/lucid_2-credit-card.svg?v=3a0bc97d41e5c6430b5ea826ea2cb0db641fe295aeb6b7e6f1e884cb8a809afa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
