export const name="data_loss_prevention";
export const id="dl_80244b4c62194d22a0b9";
export const url=new URL("../icons/data_loss_prevention.svg?v=20886cf03d4912c8938fe9881cda18af95afdf4f8669e4e7a883271427461e1c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
