export const name="contact_support-fill";
export const id="dl_bbd25490426f496488b7";
export const url=new URL("../icons/contact_support-fill.svg?v=d0666ed89b9577c3e3253ac284e93dacf316fe69c0f2a8b9464eff569ba05c1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
