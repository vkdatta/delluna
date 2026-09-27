export const name="speaker-simple-none-bold";
export const id="dl_ea6319d581fccb5b2025";
export const url=new URL("../icons/speaker-simple-none-bold.svg?v=e7f04149e87235fe80853bd545d921fe25c45ef40b20af8fb12f596398a2bd9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
