export const name="sailboat-light";
export const id="dl_fbb989dc5597051f4f79";
export const url=new URL("../icons/sailboat-light.svg?v=ca52d5335162cf4cafc4c5420b38a8208365f0ed374c70ff531b00bd45fac5b3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
