export const name="light_group_2";
export const id="dl_07438fbfa91546322776";
export const url=new URL("../icons/light_group_2.svg?v=f9f13e407e9e5ee3b89398a3981dfc2f239ff73c819cb97208b4e6235b74b99d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
