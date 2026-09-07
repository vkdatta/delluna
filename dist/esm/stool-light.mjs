export const name="stool-light";
export const id="dl_1d80dc3e24f644d5898b";
export const url=new URL("../icons/S/stool-light.svg?v=753059ee5e3055b53f1afa9fcb0df278421e024bcf4d68e1aaf88acc5998c233",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
