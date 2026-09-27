export const name="contactless";
export const id="dl_5bdf07aa680d8ab2208e";
export const url=new URL("../icons/contactless.svg?v=4ca07df0c49533d81cb84ae68ab1a1ed1fac8323bb29b5b94c801c72baebe658",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
