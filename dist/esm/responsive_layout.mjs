export const name="responsive_layout";
export const id="dl_ebd08410984540149171";
export const url=new URL("../icons/responsive_layout.svg?v=e91e43ff1e24543f77b2fbc391c4ab8920a13f97067805ed187fc754700bd4c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
