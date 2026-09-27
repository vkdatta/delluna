export const name="data_loss_prevention";
export const id="dl_cd0473663be6b197bf1b";
export const url=new URL("../icons/data_loss_prevention.svg?v=78536c676e47c7bc5273bdc4d2effec284dc2501433185f58ab4f6e310df405a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
