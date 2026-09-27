export const name="hdr_auto";
export const id="dl_d0adee436c48f3dcdcb9";
export const url=new URL("../icons/hdr_auto.svg?v=67c7b71e1253f58433326b5bba7ff4cbf7e38de02e4cff3863ff6f3523193855",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
