export const name="gear-six-light";
export const id="dl_a791a525085a483fb6b3";
export const url=new URL("../icons/gear-six-light.svg?v=042eb4683d6067174075a4acb36759f4d33f4c352d513aa3b13a3112c3c55f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
