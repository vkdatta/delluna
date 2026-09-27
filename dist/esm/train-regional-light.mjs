export const name="train-regional-light";
export const id="dl_e1b8161fb2f648adf2c6";
export const url=new URL("../icons/train-regional-light.svg?v=548da8d214339b82d06898518ee98196fb38fa077168a65e1a493d802d7db8a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
