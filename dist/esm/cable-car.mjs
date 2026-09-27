export const name="cable-car";
export const id="dl_14a2b5b1917c48afb3a9";
export const url=new URL("../icons/cable-car.svg?v=41236092110d067fc4eb717a574f9da513c839a55c06340741e8abf42edc121d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
