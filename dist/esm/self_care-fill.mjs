export const name="self_care-fill";
export const id="dl_7a51aaa87f4b382fb863";
export const url=new URL("../icons/self_care-fill.svg?v=55ad9f7f2a46a9cc26374ebebbd52991cfa36fdcfaabdfb550dec111d757ebbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
