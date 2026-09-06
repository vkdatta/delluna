export const name="pencil-ruler-light";
export const id="dl_f349082b90684d7088c7";
export const url=new URL("../icons/pencil-ruler-light.svg?v=1d9a9edb7aa05b063708b14b2c09ef6b39b4912ce29961184318d1ea03c55f50",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
