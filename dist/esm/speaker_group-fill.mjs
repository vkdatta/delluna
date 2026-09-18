export const name="speaker_group-fill";
export const id="dl_a75dd93b2896422e9b83";
export const url=new URL("../icons/S/speaker_group-fill.svg?v=da14f820f006b128bba890ae37e832f9a25cbc687d198c7d88f2be84f7a4416d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
