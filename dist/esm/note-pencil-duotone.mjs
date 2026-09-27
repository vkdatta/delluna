export const name="note-pencil-duotone";
export const id="dl_e52bd37a2b41459eae79";
export const url=new URL("../icons/note-pencil-duotone.svg?v=0178420a91d72d892372feb647c3374121ee1436e303eeec4273d13f1cdf3166",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
