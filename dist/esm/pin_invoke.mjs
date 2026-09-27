export const name="pin_invoke";
export const id="dl_790b71b735cb2b3354d5";
export const url=new URL("../icons/pin_invoke.svg?v=8f1d4fb940458b8097c66478188a53beb4dc9e1b085aae3b81e1a7279e66b13f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
