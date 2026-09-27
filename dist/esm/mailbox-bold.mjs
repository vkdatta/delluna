export const name="mailbox-bold";
export const id="dl_72eb9bfe87aa43d79562";
export const url=new URL("../icons/mailbox-bold.svg?v=2253ed98c0648fd63570a99a8fddde7c702832df6316c1e6ff934173e17c302c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
