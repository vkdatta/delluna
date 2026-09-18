export const name="voting_chip";
export const id="dl_f55de3606dac48349625";
export const url=new URL("../icons/V/voting_chip.svg?v=05357c423a2a987cf91e6993e380ea8c0d84cc6e63da155fc9911cca6834dd9d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
