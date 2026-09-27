export const name="seatbelt-duotone";
export const id="dl_625480cb208bf6ada475";
export const url=new URL("../icons/seatbelt-duotone.svg?v=feca9768fa9ea56784c9f48d4ba3e03052bb01176ec4a23f25455ea93e0dfa00",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
