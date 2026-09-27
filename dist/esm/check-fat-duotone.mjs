export const name="check-fat-duotone";
export const id="dl_e5d94e8554d64705ba87";
export const url=new URL("../icons/check-fat-duotone.svg?v=430a794af61fc32a7a30fdecd2bdbbe531bf46ed4afcae0a4ceeff56a0e5ba32",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
