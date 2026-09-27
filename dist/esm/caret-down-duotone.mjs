export const name="caret-down-duotone";
export const id="dl_4dd9fd34f5bc4e258adb";
export const url=new URL("../icons/caret-down-duotone.svg?v=faf0f23dc10e55ad09852c4879fe48096dce5167738da9c9873df78603832474",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
