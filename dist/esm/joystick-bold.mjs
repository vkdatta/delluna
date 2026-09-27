export const name="joystick-bold";
export const id="dl_4ef4d7d40ad54c34843e";
export const url=new URL("../icons/joystick-bold.svg?v=04226834373f587d763c7d7a1700264fbe76aa0b35bfe1ea2b7575f64657ae7d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
