export const name="user_attributes";
export const id="dl_0907ce9e84696a854467";
export const url=new URL("../icons/user_attributes.svg?v=d023b43fbf3af10a7f87426986bd417199f4794ce0d5ea50b46b1446dcaab9ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
