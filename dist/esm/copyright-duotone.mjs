export const name="copyright-duotone";
export const id="dl_7f65133d0b144f298f08";
export const url=new URL("../icons/copyright-duotone.svg?v=f7268bae70dd291e827ffb9f27119579c694d300a15b30f125aff8acc657667b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
