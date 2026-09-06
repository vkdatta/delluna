export const name="lucid_3-playing-card";
export const id="dl_8542480e2d584782bbd5";
export const url=new URL("../icons/lucid_3-playing-card.svg?v=a67c39706e8692af9b9e8f38ce639926090e6ffcd0d7cd5ac9da015570d83a63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
