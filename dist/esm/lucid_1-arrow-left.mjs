export const name="lucid_1-arrow-left";
export const id="dl_e908de2aa2b74221a6a6";
export const url=new URL("../icons/lucid_1-arrow-left.svg?v=73fee75dc5d60d8fec573f74051a1c94adf85d84bee6d909bb974e54622ef698",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
