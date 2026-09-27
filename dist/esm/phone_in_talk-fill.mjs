export const name="phone_in_talk-fill";
export const id="dl_64a414aa41a97578405c";
export const url=new URL("../icons/phone_in_talk-fill.svg?v=4c825ef291fdc6cce346d2535083726bdaba36b45240b5ebfe29910c69834093",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
