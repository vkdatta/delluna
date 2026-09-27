export const name="dermatology";
export const id="dl_820af8228d467613081f";
export const url=new URL("../icons/dermatology.svg?v=33a910036e2443dd4c12cc8b2ebc823aeeb47b6dfdabbae7796b4cb41d540fa7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
