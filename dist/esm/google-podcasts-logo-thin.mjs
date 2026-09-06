export const name="google-podcasts-logo-thin";
export const id="dl_a4178729a4d04267b756";
export const url=new URL("../icons/google-podcasts-logo-thin.svg?v=e5f94e6b7eaddbe26bf206a0563a0b369a4528c12f22c13b3973987b71733217",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
