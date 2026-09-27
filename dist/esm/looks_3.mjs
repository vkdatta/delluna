export const name="looks_3";
export const id="dl_2acfb4473bd504ed506d";
export const url=new URL("../icons/looks_3.svg?v=dbfdf39e19e4ee90ed0fbc25950f97439a5c9d304f19cd32a01d97da97fc2653",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
