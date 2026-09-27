export const name="skip-back-duotone";
export const id="dl_a7238a409eba1fb679cb";
export const url=new URL("../icons/skip-back-duotone.svg?v=546b87093121ab2d503346462e62a08f8e7e91beaba21fc20221029b6e700d46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
