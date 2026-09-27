export const name="hourglass-low-bold";
export const id="dl_edc8cc16705f473b8575";
export const url=new URL("../icons/hourglass-low-bold.svg?v=73c8e8b48474004e137cb9922b32c01777276987807a1a820da7f988b2c7e058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
