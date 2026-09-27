export const name="mobile_hand_left_off-fill";
export const id="dl_fea1515a62071636ab69";
export const url=new URL("../icons/mobile_hand_left_off-fill.svg?v=1b380ceddb7e6ad8fec21b75cd2724a494adf4f862e07544a6d9cdde3cdb5965",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
