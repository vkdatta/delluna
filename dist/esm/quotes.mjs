export const name="quotes";
export const id="dl_f11464280c7b48eeac5a";
export const url=new URL("../icons/quotes.svg?v=0d6498dcaf515f624b292e9cd2949cae339a3fcfb1a5e36dd1fccee9e189e2a5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
