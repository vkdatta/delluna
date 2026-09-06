export const name="cheers-duotone";
export const id="dl_17376eb6ceee4a919544";
export const url=new URL("../icons/cheers-duotone.svg?v=e516d119bafeb1f2f6cb520ec6c92af677c12627e863f737ace240010ae9f9d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
