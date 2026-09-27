export const name="credit_card_off";
export const id="dl_754da32bf2e7a3e871eb";
export const url=new URL("../icons/credit_card_off.svg?v=cec600e335fd22a3282464322ceabcdb8ef82cb90df7f69fcbdc655f28a2881c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
