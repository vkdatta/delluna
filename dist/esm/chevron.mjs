export const name="chevron";
export const id="dl_c16d80a2e9694802950d";
export const url=new URL("../icons/icons-svg/chevron.svg?v=87c76a19d62a3891023d2291ecdba116cf12c42ba31a2a15bfd161c5b1d686d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
