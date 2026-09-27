export const name="brightness_7";
export const id="dl_a48fa01f9e3bb5564beb";
export const url=new URL("../icons/brightness_7.svg?v=4b2633a1000a182bac15bcebede17c693048966e401702fb507eff7fa63a478d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
