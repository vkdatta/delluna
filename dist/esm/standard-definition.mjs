export const name="standard-definition";
export const id="dl_8734788f96eeefaa33d8";
export const url=new URL("../icons/standard-definition.svg?v=9cf26a0083f54f0e065b881e70c90e95ef5303c10a94e8d02d95d0dac06c937f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
