export const name="arrow-u-up-left-bold";
export const id="dl_f927479647ed47b68219";
export const url=new URL("../icons/arrow-u-up-left-bold.svg?v=0b357f9bcc2d200dc06b4a03a13008985af04bf8104fdee0d2993b3683f8fee5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
