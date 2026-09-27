export const name="barcode-bold";
export const id="dl_47d4c6285444487baa36";
export const url=new URL("../icons/barcode-bold.svg?v=5619735044b078733ed9272d9963930d4c0cc27a33a4b7d2787de40607f22d26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
