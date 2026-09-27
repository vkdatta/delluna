export const name="help_clinic";
export const id="dl_929238269df722a83e25";
export const url=new URL("../icons/help_clinic.svg?v=85346f727dc9c5bd55e398aaa03210aa9f3ac41b6c8bed5ff414b6f44668f3b0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
