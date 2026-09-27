export const name="amazon-logo-duotone";
export const id="dl_0f33dec1a2e04fca9926";
export const url=new URL("../icons/amazon-logo-duotone.svg?v=dd952a84c59c50d2bb637459209e44ac005e2dd1e8e55792b04db88a350ab7a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
