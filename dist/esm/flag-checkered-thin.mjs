export const name="flag-checkered-thin";
export const id="dl_335a89bf8e49402da984";
export const url=new URL("../icons/flag-checkered-thin.svg?v=d685241deed0324abce844d08fe7eb621e4200413845b27b722b694341d03fbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
