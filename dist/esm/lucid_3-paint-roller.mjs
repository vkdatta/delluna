export const name="lucid_3-paint-roller";
export const id="dl_f9360ec842b1487c8d4b";
export const url=new URL("../icons/lucid_3-paint-roller.svg?v=8ea18ea56c5658ad0ae365cc7857c48820bbfa929b769b0b2bc00e7cc1a529df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
