export const name="arrows-in-duotone";
export const id="dl_ff3c1940017c4e289267";
export const url=new URL("../icons/arrows-in-duotone.svg?v=b54dbea35377efeb3995ae36edc0c4a1671c1956fe8ed1f456c640360d668bf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
