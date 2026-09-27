export const name="warning-circle-light";
export const id="dl_c3071a48a315f2e17285";
export const url=new URL("../icons/warning-circle-light.svg?v=002b501459e48105b2e6f8fbf0ffc253dac53681568d8b6602c03e625ea9c982",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
