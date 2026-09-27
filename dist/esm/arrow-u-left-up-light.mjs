export const name="arrow-u-left-up-light";
export const id="dl_08a4aab2ac4f41c5a56b";
export const url=new URL("../icons/arrow-u-left-up-light.svg?v=e61fafcab467be2e9c685db552796cf733ad57607c8ae549dca8cd36f1333ec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
