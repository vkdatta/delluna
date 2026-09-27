export const name="signature";
export const id="dl_8f1bac1d62d56adf328d";
export const url=new URL("../icons/signature.svg?v=f8eaf802057596a6d419835f449aed86baa2df6570b332633a336a5bdb6d4e75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
