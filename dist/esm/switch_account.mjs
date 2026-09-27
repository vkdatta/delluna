export const name="switch_account";
export const id="dl_31e4f55add1040555413";
export const url=new URL("../icons/switch_account.svg?v=9a45f00e08ae27247dab685b1328968faeb1cccb15204115c22e196eeb95a71f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
