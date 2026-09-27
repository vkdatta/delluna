export const name="lucid_3-receipt-pound-sterling";
export const id="dl_4257331f55a34380ab2f";
export const url=new URL("../icons/lucid_3-receipt-pound-sterling.svg?v=eef56ef10726d070e35a97ee34074329b698c0f723faf9a05211ae129069c974",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
