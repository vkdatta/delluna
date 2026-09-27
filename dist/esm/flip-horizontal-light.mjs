export const name="flip-horizontal-light";
export const id="dl_354841ecb28347839717";
export const url=new URL("../icons/flip-horizontal-light.svg?v=df952412c0ccca0c46e5974e4d6a84c1568a4e9d5efbaedec62d8e9529cd7c61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
