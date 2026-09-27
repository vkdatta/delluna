export const name="signature-bold";
export const id="dl_ff75e5b2707452fcb4be";
export const url=new URL("../icons/signature-bold.svg?v=a97842f4745fc28c65d8b24a175f21b4adae0f2c8da8482e44af38c02bdaa483",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
