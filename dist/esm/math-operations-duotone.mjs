export const name="math-operations-duotone";
export const id="dl_951678d893cf42af9fcc";
export const url=new URL("../icons/math-operations-duotone.svg?v=40ec2ed0b218a349683d0a1388b57f8f22263528223b81986a273b84c8fabbf8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
