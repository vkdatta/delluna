export const name="computer_cancel";
export const id="dl_b2cfecaed16945edaae3";
export const url=new URL("../icons/C/computer_cancel.svg?v=861d4d7be3e1c8bc5adc40527f4ec43d5534334d58ce34c68714b4b36cce9256",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
