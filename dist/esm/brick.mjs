export const name="brick";
export const id="dl_e165104fdf3577e92c70";
export const url=new URL("../icons/brick.svg?v=c19b664129181bfc85037060921f6e376586bc200501985561db96841459b450",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
