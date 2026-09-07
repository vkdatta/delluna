export const name="wave-square-fill";
export const id="dl_1f3e6cd258e54625b6b6";
export const url=new URL("../icons/W/wave-square-fill.svg?v=272415ebf2a2042fa0ba92243a57ae57dd810a0ce6e394dd04d1772e43bbd310",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
