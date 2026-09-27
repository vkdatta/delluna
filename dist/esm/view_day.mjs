export const name="view_day";
export const id="dl_4d2c17e83a5aa71202a4";
export const url=new URL("../icons/view_day.svg?v=7a2f1002d691c6d0885988f104f7549985e475b5b3a95dfa5ef3596b3c844aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
