export const name="linux-logo-light";
export const id="dl_2febc6e721794d5a8c8d";
export const url=new URL("../icons/linux-logo-light.svg?v=1c1d641bc74bb78e1f0b7b28630603930499600fae0a94b27edf2ff7e92faec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
