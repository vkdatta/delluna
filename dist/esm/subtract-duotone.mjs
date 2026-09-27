export const name="subtract-duotone";
export const id="dl_7dd27c54c1a116176d0b";
export const url=new URL("../icons/subtract-duotone.svg?v=207da94ab250fdd2c5bfe78fb96bff8ff13d952342fd6728e0b440f18498b47c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
