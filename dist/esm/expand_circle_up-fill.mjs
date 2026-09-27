export const name="expand_circle_up-fill";
export const id="dl_56add800248885531b14";
export const url=new URL("../icons/expand_circle_up-fill.svg?v=e79dcf659d1c0b421d83a090fd04072de5ae5ecd90197431d00cc23aa0ab0b15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
