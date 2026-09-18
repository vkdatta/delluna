export const name="waving_hand";
export const id="dl_b04e7fcfa00848cebb16";
export const url=new URL("../icons/W/waving_hand.svg?v=2802e5a4bdb9ed71ab28eb1f655050e3faa9ca60081eb10ee549528f8adcd865",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
