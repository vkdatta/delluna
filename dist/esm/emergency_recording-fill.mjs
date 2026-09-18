export const name="emergency_recording-fill";
export const id="dl_f6ac0eb56de8484c8283";
export const url=new URL("../icons/emergency_recording-fill.svg?v=cf6cfc12bcc4ef27e8e134ac168a7e62d2a21646fb1b60af94c2b6b6566ab5aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
