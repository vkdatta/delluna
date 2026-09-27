export const name="arrow_back";
export const id="dl_d25f1fe91c87871d603b";
export const url=new URL("../icons/arrow_back.svg?v=b89e29d89f750bff024199032d6129feabc6f8b664d5a0f987a685988b5f9e08",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
