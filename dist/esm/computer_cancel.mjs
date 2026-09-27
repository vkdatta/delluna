export const name="computer_cancel";
export const id="dl_b0a351d22c79ee552498";
export const url=new URL("../icons/computer_cancel.svg?v=cbb30b1fcf4db99a90b126b501b510408fb89237e6a8b69cd4164c0d46b08ee3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
