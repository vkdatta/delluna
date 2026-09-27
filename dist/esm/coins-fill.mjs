export const name="coins-fill";
export const id="dl_fc3f352c4aa1419e847b";
export const url=new URL("../icons/coins-fill.svg?v=275af0a955881aa07d1bec25ec3357f4d55096d156b1cc3cb52688f84525e243",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
