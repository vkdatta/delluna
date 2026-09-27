export const name="braces";
export const id="dl_9a861cbba889420b9daa";
export const url=new URL("../icons/braces.svg?v=48972b5840814e139a66d772a6bf49b9ca0f0bd160c9d06ca818794151130b1b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
