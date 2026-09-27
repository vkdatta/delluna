export const name="auto_stories_off";
export const id="dl_6b3d10d991fd935a44de";
export const url=new URL("../icons/auto_stories_off.svg?v=48de1fc25f6d22542fd7b28771758e88135c72597b737584d3432da51fd76911",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
