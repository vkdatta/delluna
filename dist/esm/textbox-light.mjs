export const name="textbox-light";
export const id="dl_9427c991f8ad4f9e858d";
export const url=new URL("../icons/T/textbox-light.svg?v=1a33a4214bfe4c24df42b26eba4c3208aea0d22929ea290ba5f8792e926da331",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
