export const name="train-simple-duotone";
export const id="dl_96318e89f4d14ba0b43a";
export const url=new URL("../icons/T/train-simple-duotone.svg?v=cfff84c52e63b30ac48129c64201cf619a5baf7dee97ce7dc06d46c227398c1a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
