export const name="joystick-bold";
export const id="dl_4ef4d7d40ad54c34843e";
export const url=new URL("../icons/joystick-bold.svg?v=19c929167cf0fb6cf1633b7f813cd621caff0d783fc11b92f92cc47a382b6d32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
