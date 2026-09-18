export const name="adjust";
export const id="dl_2a560173af8c46f8b9aa";
export const url=new URL("../icons/adjust.svg?v=f0b5a61365411d8b2492132648742a3676ea18cb0ed3910ae782ef35c9099813",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
