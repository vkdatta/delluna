export const name="number-square-zero";
export const id="dl_83593af9208d41a19728";
export const url=new URL("../icons/number-square-zero.svg?v=2501bdb262c5ddfe5986025db2a07ab5b8e10d8af23882c4a9a1bc222f55e8e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
