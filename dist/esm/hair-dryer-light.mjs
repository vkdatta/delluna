export const name="hair-dryer-light";
export const id="dl_c892a51b3adc4bb0b2dc";
export const url=new URL("../icons/hair-dryer-light.svg?v=677250fd2b8539e8fc30814fd6362e7671dcddeef7c5a814b9097d42f70aeb81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
