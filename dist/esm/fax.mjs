export const name="fax";
export const id="dl_b85c7202e50647f88047";
export const url=new URL("../icons/F/fax.svg?v=4cb9d34ffdcce506e182244c70676e35472fc5038e561ec026f8ae93eddbf271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
