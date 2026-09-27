export const name="calendar_check";
export const id="dl_ec84dc6d859344f20471";
export const url=new URL("../icons/calendar_check.svg?v=a9317d23d553289f8b1e5276613cb1879fc6271f121c078ecc2fa7819c85955c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
