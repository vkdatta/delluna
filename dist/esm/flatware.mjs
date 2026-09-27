export const name="flatware";
export const id="dl_300cd5e53e4a0b472844";
export const url=new URL("../icons/flatware.svg?v=172aec5ccb0704ce2115faa2651deac3855feeabc97b7b54d8dfe490013cbc7f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
