export const name="add_circle";
export const id="dl_03504b387cbb716b0de0";
export const url=new URL("../icons/add_circle.svg?v=ff7b2df02251fb74709c63183f6b12c66bdc194b86290f035bf0bb3b594f7578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
