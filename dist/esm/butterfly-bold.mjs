export const name="butterfly-bold";
export const id="dl_a082f220f83c4f5b914f";
export const url=new URL("../icons/butterfly-bold.svg?v=485403202cbd2bcc527acb7a771edc387fc7470d2b4024f8c4af7e3be06e0ab0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
