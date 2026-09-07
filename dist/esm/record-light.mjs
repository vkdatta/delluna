export const name="record-light";
export const id="dl_66f9adab8f6c4153bc23";
export const url=new URL("../icons/record-light.svg?v=670e429d2f637e2e7d731106f171397e70d20f9826fc521847e6dedfda95883d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
