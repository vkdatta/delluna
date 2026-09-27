export const name="emoji_people-fill";
export const id="dl_49ccafa4651fe3418eea";
export const url=new URL("../icons/emoji_people-fill.svg?v=2ed60de7bf56df631f3378da9f00b466fc49bb8a4fba2bd53034166c890e27a6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
