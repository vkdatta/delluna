export const name="reset_white_balance-fill";
export const id="dl_e7696c09ab410bc9c2c4";
export const url=new URL("../icons/reset_white_balance-fill.svg?v=87b89ec31ed3f21f65952aaba5ba5607529d65d169a05e68fc4b57f0f318f75b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
