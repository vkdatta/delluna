export const name="vaccines";
export const id="dl_36f923406c18b9414285";
export const url=new URL("../icons/vaccines.svg?v=acaccecfe4e073568b29d821892892dd7186082c1c83ae361a57edd01bc1b080",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
