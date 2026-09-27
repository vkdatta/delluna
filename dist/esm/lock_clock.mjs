export const name="lock_clock";
export const id="dl_856a7ceff09cadbbb630";
export const url=new URL("../icons/lock_clock.svg?v=4cab5aa8a05aee9b092aa19a68649bf9d654a83014048181f1a57f351bf531dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
