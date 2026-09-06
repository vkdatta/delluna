export const name="lucid_3-radio-receiver";
export const id="dl_0575924a600f4799ad1d";
export const url=new URL("../icons/lucid_3-radio-receiver.svg?v=f44b6e1e81f8e3bfd52bcc9e2f34b966bd355f0a75d0894bd21d35f85af3cf43",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
