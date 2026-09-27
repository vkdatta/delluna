export const name="perm_media-fill";
export const id="dl_a053ce1e07615a934e11";
export const url=new URL("../icons/perm_media-fill.svg?v=21b033266c2ba3da2cb36226685b9675031fbf95274425182286c318b1ed696a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
