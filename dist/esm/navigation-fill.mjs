export const name="navigation-fill";
export const id="dl_8be8a0ce052a3539e31e";
export const url=new URL("../icons/navigation-fill.svg?v=fcad4064960ba54e3b36789a3791851ff6955d2c4c3f9e3127cf700f927ec386",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
