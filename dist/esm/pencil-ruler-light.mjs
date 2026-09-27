export const name="pencil-ruler-light";
export const id="dl_f349082b90684d7088c7";
export const url=new URL("../icons/pencil-ruler-light.svg?v=a62e2acb48f3086be6fb43be0c056be6843668d4ab3f4124f6fbe838b5b6fbdc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
