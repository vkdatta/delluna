export const name="sticky-note-off";
export const id="dl_dac9e818b1254961b7db";
export const url=new URL("../icons/sticky-note-off.svg?v=9d0f363f5036164e2caf095c2e1509d5a86bf90c846f75cd3cdc08fff43c4750",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
