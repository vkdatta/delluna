export const name="fax-fill";
export const id="dl_e0a6441213c4b6c5b500";
export const url=new URL("../icons/fax-fill.svg?v=f93cc3ad77832b20751abffa0eeef77edfb77d38280894df1ccb8591b512cf36",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
