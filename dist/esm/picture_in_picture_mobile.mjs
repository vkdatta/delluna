export const name="picture_in_picture_mobile";
export const id="dl_2707b372f29089518a1e";
export const url=new URL("../icons/picture_in_picture_mobile.svg?v=581274575dd4494651cb40fe7e9320a940172b63a4c116b48bfb63c2e799c2b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
