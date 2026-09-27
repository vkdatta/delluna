export const name="pin_end-fill";
export const id="dl_f809e825b9a1ade33a2f";
export const url=new URL("../icons/pin_end-fill.svg?v=37b7befdeccc5c410e8a535eb20852e9121570eb6f7f742333d42abc56d21485",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
