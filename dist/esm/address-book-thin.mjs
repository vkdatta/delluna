export const name="address-book-thin";
export const id="dl_22cbc782bd4b42c4a955";
export const url=new URL("../icons/address-book-thin.svg?v=2ad3d0d539bea386fc9b2665db8408bc140a21ba6bd4c65f29699207e5122c76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
