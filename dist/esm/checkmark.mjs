export const name="checkmark";
export const id="dl_58fc6c6752e04eb7a0b5";
export const url=new URL("../icons/checkmark.svg?v=3ef772c4a84d6477a97973db330e8c3aa6e67cfb17f21fcc73e78b468ed04395",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
