export const name="test-tube";
export const id="dl_a39de29cc89f4f3c955a";
export const url=new URL("../icons/T/test-tube.svg?v=1abc795b2c617d3a829024765aae29055bf783357c5471a0feea806e1d4662ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
