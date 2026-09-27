export const name="lucid_3-omega";
export const id="dl_ddee26e284b54b21bf22";
export const url=new URL("../icons/lucid_3-omega.svg?v=cd13fbde12a66f19c330d46943e713f70da1669d89ca04a327f126e4cc32cd0e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
