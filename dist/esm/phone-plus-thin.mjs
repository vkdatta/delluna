export const name="phone-plus-thin";
export const id="dl_56ecf500de9c4bf7b83d";
export const url=new URL("../icons/phone-plus-thin.svg?v=89053a2c28bab0434abe4210c8332b304b163ff7b7f191ac28983adfa27312dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
