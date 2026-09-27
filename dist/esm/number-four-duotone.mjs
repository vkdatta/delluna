export const name="number-four-duotone";
export const id="dl_9658a03c5458418c8bb7";
export const url=new URL("../icons/number-four-duotone.svg?v=21ef6a387de8139eea2aeae546d805031c817a55a03cd0fd54fa790a3fe0d7e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
