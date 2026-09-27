export const name="lucid_2-image-up";
export const id="dl_5d5beb6bbe4a42a2a294";
export const url=new URL("../icons/lucid_2-image-up.svg?v=1987865dd092cb15307cf0caeec9c2d5c6c89be733ce2db6b6acf3a922b8981c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
