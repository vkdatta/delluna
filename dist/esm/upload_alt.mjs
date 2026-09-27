export const name="upload_alt";
export const id="dl_dc9c67349ce65a1f179f";
export const url=new URL("../icons/upload_alt.svg?v=bfd95dc769ef19e4e1904ca469d99d99307366bbaf42d32061e99b8120d8d9af",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
