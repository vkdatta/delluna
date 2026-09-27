export const name="lucid_2-corner-right-up";
export const id="dl_435112906d81472690de";
export const url=new URL("../icons/lucid_2-corner-right-up.svg?v=458e219ded1aa4f9746a2566cac22a941b24330740c1dbfcc948bbe93919adad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
