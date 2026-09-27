export const name="ghost-fill";
export const id="dl_bfa6b4e28eea42a3acae";
export const url=new URL("../icons/ghost-fill.svg?v=81b99d5749ddcde7f4881ec6927d0028e9d7c4da702d2b723c4acb6c3c733744",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
