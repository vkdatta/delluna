export const name="shield_watch";
export const id="dl_1cd9a743cc604cfeb61b";
export const url=new URL("../icons/S/shield_watch.svg?v=40bac3e6f3b72d0574f72a4691e8ab49c017ac7fa9572287bccac5778a41b777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
