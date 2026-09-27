export const name="lucid_2-lens-concave";
export const id="dl_63295e824dd24597bafb";
export const url=new URL("../icons/lucid_2-lens-concave.svg?v=d708b4c165d1a28b302d6d1787d93bcc4f93bf7b37598613241ff91e77d81e8d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
