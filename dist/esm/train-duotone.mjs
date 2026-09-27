export const name="train-duotone";
export const id="dl_962c8651d8407959d594";
export const url=new URL("../icons/train-duotone.svg?v=4303eb3ffca9bb45d29893f0b182ac79ed7124768f7764ebebf3cfb3ccf46e9f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
