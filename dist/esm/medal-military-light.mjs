export const name="medal-military-light";
export const id="dl_2163b1fd6cb645ff8e59";
export const url=new URL("../icons/medal-military-light.svg?v=b5ac0b2a3ff096b56c4323cbba8f7490b31a78c6bc12066ea5fea843e11f902d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
