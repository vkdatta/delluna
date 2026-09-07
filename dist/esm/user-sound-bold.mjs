export const name="user-sound-bold";
export const id="dl_c1f0c788a39c4daf9149";
export const url=new URL("../icons/U/user-sound-bold.svg?v=cc5c02cc116b2579dd37ec6ad3493c2cadd4d2018af0d32465398a36f39ef66d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
