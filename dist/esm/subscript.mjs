export const name="subscript";
export const id="dl_4ab46ed235a04c7ea3b1";
export const url=new URL("../icons/subscript.svg?v=c82b097741ed4f01797b1ea2497494a9394a7e29d2fa5ffdb49645ad93b46439",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
