export const name="flip-horizontal-light";
export const id="dl_354841ecb28347839717";
export const url=new URL("../icons/flip-horizontal-light.svg?v=e4a2c8305920f5d24c9853ff2ec159bc8e671292387c65c19228dfc6158ab7ca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
