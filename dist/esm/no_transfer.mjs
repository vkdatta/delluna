export const name="no_transfer";
export const id="dl_a134ecdcafb67b8930d7";
export const url=new URL("../icons/no_transfer.svg?v=3955b884918d86f5045d67e4b67be373019324ed5bff122690f431f2d86b0e44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
