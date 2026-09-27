export const name="eject-simple-duotone";
export const id="dl_085f9c67f0594a62a5e0";
export const url=new URL("../icons/eject-simple-duotone.svg?v=167b89c90658066e3a999dc2941bafa55ba9e0632e31e2938e107eae5096779c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
