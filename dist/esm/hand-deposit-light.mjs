export const name="hand-deposit-light";
export const id="dl_e816743e88f6462abe5b";
export const url=new URL("../icons/hand-deposit-light.svg?v=2c3d5f2eb17f7154a27ec74a3e153fcbf0891f76979e4af9a35c02c16c4a5f91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
