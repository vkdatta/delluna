export const name="phone-x-duotone";
export const id="dl_9661f4f60278455f8d70";
export const url=new URL("../icons/phone-x-duotone.svg?v=567ee99b21698e836ef77eea0b1f527cebbe6173f37183402f4dc730c7c65953",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
