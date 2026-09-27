export const name="frame_bug";
export const id="dl_7dc77918dc48eb2064ea";
export const url=new URL("../icons/frame_bug.svg?v=27764e366195a9f3f3326b146c6efbf62c0034d445a342b3afa7740735c98e05",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
