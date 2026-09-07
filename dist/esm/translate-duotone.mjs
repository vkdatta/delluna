export const name="translate-duotone";
export const id="dl_2ec155caa9a84c7fa220";
export const url=new URL("../icons/T/translate-duotone.svg?v=04eb7f04af76dfdc3e34444c9103caa2f46408604bceb8fb60bcca5c8822a780",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
