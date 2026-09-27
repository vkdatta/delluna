export const name="fork_spoon";
export const id="dl_ba0f769101a2ab14a43e";
export const url=new URL("../icons/fork_spoon.svg?v=7c55d2a1020e9034c9b076e428b227147c1614671727c9741d4ffbac585b6353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
