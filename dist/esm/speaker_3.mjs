export const name="speaker_3";
export const id="dl_24417e53ff9949b1af35";
export const url=new URL("../icons/S/speaker_3.svg?v=3f80f4cb40c9f593a156eee8de0b1a70c911e5791dd273c8b9f4648ccb36d5a9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
