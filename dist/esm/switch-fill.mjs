export const name="switch-fill";
export const id="dl_fc42de7276676ea70d41";
export const url=new URL("../icons/switch-fill.svg?v=feea30405ec794e46d6c002e77ebf4afef56b5726c0306a0c637644a3b471257",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
