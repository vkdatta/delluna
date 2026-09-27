export const name="club-light";
export const id="dl_b638933abf3e4fed9b73";
export const url=new URL("../icons/club-light.svg?v=de3cd81d73c94d633c756e4409c872d4ead9eb42251faca111ad3af770c8f57b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
