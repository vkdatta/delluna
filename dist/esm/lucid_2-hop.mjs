export const name="lucid_2-hop";
export const id="dl_0cd3b26af4da4fb3a5bd";
export const url=new URL("../icons/lucid_2-hop.svg?v=4ef187b17898014a5279ce2708c53cd6bd32c1d2cb3fb76d6c5998a0cdcaa0a0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
