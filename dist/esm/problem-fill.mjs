export const name="problem-fill";
export const id="dl_e12b3c23be4a510184e1";
export const url=new URL("../icons/problem-fill.svg?v=36e4c37235d270c2d85450991626e330668ccefba25b5fcac55a5ab65cb1efab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
