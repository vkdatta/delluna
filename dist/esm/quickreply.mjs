export const name="quickreply";
export const id="dl_d98acb37553a46b4a134";
export const url=new URL("../icons/quickreply.svg?v=1771d99aec8180ed37a684ca62781baeb098808d5ef593b09f11b1f65db39f27",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
