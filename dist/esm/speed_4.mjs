export const name="speed_4";
export const id="dl_8be051d0e3869bd97bb3";
export const url=new URL("../icons/speed_4.svg?v=6930825d0c6852f8fa138ee1524cc7a308b5c0c0e3d431c482092f946b2055ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
