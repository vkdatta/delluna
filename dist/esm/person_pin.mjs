export const name="person_pin";
export const id="dl_430dec8974a719439fd3";
export const url=new URL("../icons/person_pin.svg?v=3e1f80740789cfde901090519befec90b0555e0a1cf8f0c181713e4fbaf23d3e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
