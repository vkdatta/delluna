export const name="anchor-simple";
export const id="dl_ae5ffc8730af43dc8c4d";
export const url=new URL("../icons/anchor-simple.svg?v=06295ac2df51ca3b2f980395946de3edd19a268751d1ecf48396ded5fa18e692",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
