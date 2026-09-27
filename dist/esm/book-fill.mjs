export const name="book-fill";
export const id="dl_871e584a57db44398450";
export const url=new URL("../icons/book-fill.svg?v=207eb2ce0e0255894c61e07c878c8f4ffd3a4b6e1740f8da327e14ec2f40d410",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
