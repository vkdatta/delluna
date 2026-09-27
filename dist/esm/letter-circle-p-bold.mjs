export const name="letter-circle-p-bold";
export const id="dl_7eb530c6d15045139f9c";
export const url=new URL("../icons/letter-circle-p-bold.svg?v=6f0e528dfa0b9b2394412a206350bcc93b94b5f1c7f48b2791a25986a60bcc9e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
