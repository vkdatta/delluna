export const name="ev_shadow_minus";
export const id="dl_da9a4f41a829a778077c";
export const url=new URL("../icons/ev_shadow_minus.svg?v=93f8786b54be2c634c42d19d3155a76918785b6f681368ed5617001ba0aedb32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
