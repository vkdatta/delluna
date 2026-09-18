export const name="transition_chop";
export const id="dl_f984e2907c5048678b35";
export const url=new URL("../icons/T/transition_chop.svg?v=b55c06a3c5b4f1020e16bd72f92af4babe2cab22bad0a588e075d2fbbf40d162",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
