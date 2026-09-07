export const name="credit-card-light";
export const id="dl_a264882a053f4ae0893c";
export const url=new URL("../icons/credit-card-light.svg?v=9ae8f56c0c80b5022281e19563257617aba0b03cd243f44947760467b1ecf97b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
