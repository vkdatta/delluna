export const name="lucid_3-save";
export const id="dl_5dc324380cf24942bd7f";
export const url=new URL("../icons/lucid_3-save.svg?v=18e95aec0fe2e15693d92be492c8f5e71ad65389ebb0e44a10b2885033071555",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
