export const name="nest_wake_on_press";
export const id="dl_5c8245661caab17802d7";
export const url=new URL("../icons/nest_wake_on_press.svg?v=c12e0a1efe4735acf3037236148c5dbfa4abaf981f9bc07f334401e3d6f8b697",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
