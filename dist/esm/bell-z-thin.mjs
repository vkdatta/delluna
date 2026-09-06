export const name="bell-z-thin";
export const id="dl_ec1bedb67f9c424fb84f";
export const url=new URL("../icons/bell-z-thin.svg?v=17336efb228ab21cb12f4b9e6f50773a24db398a15350030bbe7f0a53a3702bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
