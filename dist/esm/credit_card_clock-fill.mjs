export const name="credit_card_clock-fill";
export const id="dl_3a753eb24c95e5ccbce4";
export const url=new URL("../icons/credit_card_clock-fill.svg?v=95d4c7b76edf56e3886d6d439d35af55bd4aee134165dba2c44de411c7f64f5f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
