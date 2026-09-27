export const name="trash-simple-duotone";
export const id="dl_f038ff46c49083a4db1f";
export const url=new URL("../icons/trash-simple-duotone.svg?v=38db8f182eb2e9249062ceffabcf0bc5b306de298baaa397d6a1003d807384f5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
