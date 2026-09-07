export const name="arrows-split-light";
export const id="dl_048ebcfee11a42f89c81";
export const url=new URL("../icons/arrows-split-light.svg?v=79926424fc2c5b1b9842f30b71018c307716f41f3fe1013d7e9af2fdae83cbdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
