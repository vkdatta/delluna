export const name="arrow-arc-right-light";
export const id="dl_2718246905c14f6abd93";
export const url=new URL("../icons/arrow-arc-right-light.svg?v=e690665f0afbac185603d9e7bfd3671a9173abe7bdd0a267d178072ea8efefa9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
