export const name="add_home";
export const id="dl_18186a1617f720ecce31";
export const url=new URL("../icons/add_home.svg?v=3c1f6b48c82c6e4ad4c8306fd7e8d80907b7ffc20d9cb5393915c6e38b98f092",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
