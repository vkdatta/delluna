export const name="gift-duotone";
export const id="dl_63aae71faf2e4d0180ba";
export const url=new URL("../icons/gift-duotone.svg?v=8d1c765396fa149ee4d709be754945860dd1b034dab8572fa51a95c074f7a3bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
