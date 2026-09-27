export const name="cigarette-light";
export const id="dl_b0089ab2ff024567b060";
export const url=new URL("../icons/cigarette-light.svg?v=399e4b2c08807113b85e5c35f33687be2f3922a92b9a04dc495aadbaaa103feb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
