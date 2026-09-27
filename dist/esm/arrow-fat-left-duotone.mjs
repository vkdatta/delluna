export const name="arrow-fat-left-duotone";
export const id="dl_655a88bddad644d195ab";
export const url=new URL("../icons/arrow-fat-left-duotone.svg?v=d2517211869ce7cc28db65e90b89e7465c0c99a12caa4e45dcfe63c839b26572",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
