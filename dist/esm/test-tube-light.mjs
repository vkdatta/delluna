export const name="test-tube-light";
export const id="dl_2c56c3381f2c45d1bc3d";
export const url=new URL("../icons/T/test-tube-light.svg?v=bf05481b3ad0b44e1b75e83293be4958992e4690ccf0b7b914046cb824b385c9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
