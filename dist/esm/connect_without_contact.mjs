export const name="connect_without_contact";
export const id="dl_7c08fa6a84e2da54cbf6";
export const url=new URL("../icons/connect_without_contact.svg?v=1f91261ed8d2c51b3539624aea517654cccb2951835d64ebcbe2dc93e04ebbba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
