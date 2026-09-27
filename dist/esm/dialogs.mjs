export const name="dialogs";
export const id="dl_d4f66eb88071050c46ba";
export const url=new URL("../icons/dialogs.svg?v=017265798934e920c8b2980182b0b95556e4ccb358cadb0c56d76937160bb8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
