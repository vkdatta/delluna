export const name="dentistry";
export const id="dl_6f00c56cb28e2a5900f0";
export const url=new URL("../icons/dentistry.svg?v=bb56dabd05b68fe2b132f3ef80b0761d16ed349299fd4043f001284a2890fbcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
