export const name="rainbow-cloud-light";
export const id="dl_384bd2898ded45c48c29";
export const url=new URL("../icons/rainbow-cloud-light.svg?v=f226e9377963dffc30f4f1e596358eace43215c65d233151e7a3044a2d70bdd5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
