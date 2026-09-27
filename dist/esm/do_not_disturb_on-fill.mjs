export const name="do_not_disturb_on-fill";
export const id="dl_772cd0a22f45cf5d1bb5";
export const url=new URL("../icons/do_not_disturb_on-fill.svg?v=ef2ba82ec1d7e34a23bdb0ca564aa32e090166f7e17af602094b6f0056673cfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
