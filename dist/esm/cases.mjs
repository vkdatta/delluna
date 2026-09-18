export const name="cases";
export const id="dl_a41bf7ad397d42959432";
export const url=new URL("../icons/cases.svg?v=e4a61793267b45477e85f8496bd4737565edaae713cae95afdf1a4955face513",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
