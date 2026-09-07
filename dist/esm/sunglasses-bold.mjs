export const name="sunglasses-bold";
export const id="dl_82c09da1fb3444188202";
export const url=new URL("../icons/S/sunglasses-bold.svg?v=ec5d8b5066b4d21ce26c9366b301b42bc330027837884e5d164b94b4f615db76",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
