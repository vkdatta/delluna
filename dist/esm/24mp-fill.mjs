export const name="24mp-fill";
export const id="dl_c35bdedf6e1ca3efeb99";
export const url=new URL("../icons/24mp-fill.svg?v=fedf0b77a0600fa856c9fa50b77aefaac55928cf55a1efe97937d5db6e87d05f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
