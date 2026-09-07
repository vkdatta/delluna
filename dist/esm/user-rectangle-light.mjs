export const name="user-rectangle-light";
export const id="dl_7790bac097ce4485bdb9";
export const url=new URL("../icons/U/user-rectangle-light.svg?v=5676a913c586a3521e80c4f9a035627cbf21df26b39507c18e5c3b0f654bf454",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
