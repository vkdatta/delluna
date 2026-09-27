export const name="train-simple";
export const id="dl_145a5a0b4612b0db1053";
export const url=new URL("../icons/train-simple.svg?v=0083f75decc3943d49c6faf4b812420100de906c11181e70683499c76349273f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
