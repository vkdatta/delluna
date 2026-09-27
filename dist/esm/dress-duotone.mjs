export const name="dress-duotone";
export const id="dl_9117d02ad8f843c5be5d";
export const url=new URL("../icons/dress-duotone.svg?v=9dcf3c7531f070b83d4a087cd1ded53e60956c514af0657e1fb361b9c31bf0a7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
