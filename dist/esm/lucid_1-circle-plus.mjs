export const name="lucid_1-circle-plus";
export const id="dl_2b21c5c0b0034b9dae81";
export const url=new URL("../icons/lucid_1-circle-plus.svg?v=91e10b4441561cf87b000653a21ab832c2cd56c626726237f11e1eb5a510fea2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
