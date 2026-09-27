export const name="phone_forwarded";
export const id="dl_cc4463ed083caad6641d";
export const url=new URL("../icons/phone_forwarded.svg?v=6b440428d0990c8c6221363df64101be21e335f0f71cb1499d43710413cfa9d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
