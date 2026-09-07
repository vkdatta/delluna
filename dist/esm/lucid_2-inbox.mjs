export const name="lucid_2-inbox";
export const id="dl_8a60cd881e9b47b9a342";
export const url=new URL("../icons/lucid_2-inbox.svg?v=c19be2abcd2470f6c889f8794887ce1f6bfe2108413ea0245a8b1bec710966b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
