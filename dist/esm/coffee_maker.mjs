export const name="coffee_maker";
export const id="dl_1b3cbf01a3e58a136f3f";
export const url=new URL("../icons/coffee_maker.svg?v=7b4e018d47ac592427fc4fa8b0c91dc028f4c584e7ac5218a71e0c4e59164492",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
