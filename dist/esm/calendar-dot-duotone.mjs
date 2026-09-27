export const name="calendar-dot-duotone";
export const id="dl_7ef728495af24b1e9474";
export const url=new URL("../icons/calendar-dot-duotone.svg?v=883c1caba279e5e5dd4e8af97d98a73cc4f2f34336441792b434f01c8b20d8ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
