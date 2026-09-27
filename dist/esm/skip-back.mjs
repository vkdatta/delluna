export const name="skip-back";
export const id="dl_41b35121dfa716aa908f";
export const url=new URL("../icons/skip-back.svg?v=7219272dd183d1522a1efb3756e9ae63089f53b644d501ab0d26ca1f8761cd31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
