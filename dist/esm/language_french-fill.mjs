export const name="language_french-fill";
export const id="dl_ef4566f43ac2cf23d5af";
export const url=new URL("../icons/language_french-fill.svg?v=decfe636d27c593ce07449e4a4a01ea86505829d8ad07966bda223f31052bac8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
