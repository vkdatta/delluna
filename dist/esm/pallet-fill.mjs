export const name="pallet-fill";
export const id="dl_9eb133bce9a1ec1524c3";
export const url=new URL("../icons/pallet-fill.svg?v=07b4b622abe8e0ce65963972ba08d5731228946dbfaf49e3210fd6520cf1cb56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
