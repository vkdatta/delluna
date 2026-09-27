export const name="onigiri-duotone";
export const id="dl_bebaf857f03e41448eb6";
export const url=new URL("../icons/onigiri-duotone.svg?v=7ec2ff43fef8d0c2960bda795fbd1758f30654d1d0e1a90128fffa0f753e1cda",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
