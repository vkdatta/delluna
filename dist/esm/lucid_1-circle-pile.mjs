export const name="lucid_1-circle-pile";
export const id="dl_1bbe95d436f14429aa50";
export const url=new URL("../icons/lucid_1-circle-pile.svg?v=0306880a71b6c674240b2dd394eb1357776116e0c118e57d8be4ccdc248ca95a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
