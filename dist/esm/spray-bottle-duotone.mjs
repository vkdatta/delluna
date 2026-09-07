export const name="spray-bottle-duotone";
export const id="dl_235fbea52644479c9262";
export const url=new URL("../icons/S/spray-bottle-duotone.svg?v=9171288ca5284b12e13fc89ced9a05d27cc80ba3131d3ee6b81fe4dcec416098",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
