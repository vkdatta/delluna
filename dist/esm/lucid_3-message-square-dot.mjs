export const name="lucid_3-message-square-dot";
export const id="dl_fed75f914e534a3b8521";
export const url=new URL("../icons/lucid_3-message-square-dot.svg?v=acba619f65562c47ba2f28c212ef1520ab88239c3b128783a49b7a5567d9b6b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
