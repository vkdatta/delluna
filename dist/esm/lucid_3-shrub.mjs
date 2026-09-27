export const name="lucid_3-shrub";
export const id="dl_f40a234a1ab74e459391";
export const url=new URL("../icons/lucid_3-shrub.svg?v=8c1962b86facb22276373ab0e3489c7a72de5911b34490d5e54b1b1cb19393bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
