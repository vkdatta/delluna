export const name="gamepad_circle_down-fill";
export const id="dl_9e945267eaf3f03afba5";
export const url=new URL("../icons/gamepad_circle_down-fill.svg?v=1a7b2b7904877fbf9cf25e16d47ae2d16697e9c15f2fc8f70fe92e5ba581a94f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
