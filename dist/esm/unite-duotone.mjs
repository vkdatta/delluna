export const name="unite-duotone";
export const id="dl_72ed34bdde4bc109c730";
export const url=new URL("../icons/unite-duotone.svg?v=188b1d603ee700d740fd8e29e823c1886484251257aa9a57f99680a01e294a04",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
