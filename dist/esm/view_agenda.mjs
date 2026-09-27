export const name="view_agenda";
export const id="dl_63e304da695fd076bcd7";
export const url=new URL("../icons/view_agenda.svg?v=5303dc46f391f48c6eb7e27d4179cf870630453d971c5496692a216ad0dc6c98",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
