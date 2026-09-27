export const name="hospital";
export const id="dl_5c290ce2e0f54a8daf8c";
export const url=new URL("../icons/hospital.svg?v=0cb999202a4ede5028d2f3bd4b132b34b5b5c26db294d881d7641855de69d43a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
