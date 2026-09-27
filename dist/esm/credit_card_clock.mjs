export const name="credit_card_clock";
export const id="dl_f2e3fec7a8e790ed665c";
export const url=new URL("../icons/credit_card_clock.svg?v=290db3c165bbf20a8861bd565d383c6903e2fc50cb0cbbbf23439d0f04abc9a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
