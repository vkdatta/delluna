export const name="phone_in_talk-fill";
export const id="dl_bef92c1d9866dc3f9a93";
export const url=new URL("../icons/phone_in_talk-fill.svg?v=97e56c63b9861d01d38e445df529bf4e44739506e8bec0420c5a4a9cf3575c23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
