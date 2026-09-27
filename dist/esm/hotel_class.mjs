export const name="hotel_class";
export const id="dl_dfaf55171b5f25802b94";
export const url=new URL("../icons/hotel_class.svg?v=fe0ad94997955fae210be229637d5914e2e3ac12d925cf725886d0b68768e115",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
