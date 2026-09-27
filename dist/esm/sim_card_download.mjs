export const name="sim_card_download";
export const id="dl_1a0cdc146957de5d3320";
export const url=new URL("../icons/sim_card_download.svg?v=b7e725abb39d1a88f3fbee93219526944ea039b9eae7388d82dd8f004f9778b4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
