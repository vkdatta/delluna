export const name="lucid_1-chef-hat";
export const id="dl_eb6595a6b8a64e74a9f5";
export const url=new URL("../icons/lucid_1-chef-hat.svg?v=c51e10f4ee027de26a149811e45fd5416b2c4682aa3705fbe25113108a88e3ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
