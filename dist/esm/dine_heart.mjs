export const name="dine_heart";
export const id="dl_4c9a57e996e3306df003";
export const url=new URL("../icons/dine_heart.svg?v=80e8b309ccf3f157bb2ad36c045a67ea5abef4187f9fe1c4929b3cf87ebd2784",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
