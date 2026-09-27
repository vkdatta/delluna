export const name="explosion";
export const id="dl_381f415ff35d046bb0e7";
export const url=new URL("../icons/explosion.svg?v=5892cd5449ca7f45cedc63576b22d01b490dcc6139400d4e1912881907412963",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
