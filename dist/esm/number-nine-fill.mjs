export const name="number-nine-fill";
export const id="dl_e86866f3b93e4b50b2ca";
export const url=new URL("../icons/number-nine-fill.svg?v=8747ffbe1f33f01b2e128a846c56d83b3660e4807144819dda66ba689653a27d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
