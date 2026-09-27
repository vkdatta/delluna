export const name="check-square-light";
export const id="dl_e2299cad2fae4befa13d";
export const url=new URL("../icons/check-square-light.svg?v=bf287555c67d4240f48475d76b928a49313b8ed33bcd5e213ea19b926e66b66e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
