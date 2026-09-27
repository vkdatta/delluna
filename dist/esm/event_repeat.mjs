export const name="event_repeat";
export const id="dl_e18cc4bf65c64025f8d1";
export const url=new URL("../icons/event_repeat.svg?v=71a0c1e497bff5ec173694a662c36d5f694a4fd04f71184a1bfba5c541bea37a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
