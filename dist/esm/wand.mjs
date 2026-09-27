export const name="wand";
export const id="dl_dd54abcefe064e298c36";
export const url=new URL("../icons/wand.svg?v=be842bdb5a829d2a1539bf63aa48eccdbc0fc83e0fae70ac8b348dae17a756ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
