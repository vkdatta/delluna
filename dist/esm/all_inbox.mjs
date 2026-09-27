export const name="all_inbox";
export const id="dl_ba33e21223b485c34463";
export const url=new URL("../icons/all_inbox.svg?v=0b0211aac15f944b152193f7a0ce324e6a00aeb91b4ba202b765aad1c23258fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
