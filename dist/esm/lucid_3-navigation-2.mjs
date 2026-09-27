export const name="lucid_3-navigation-2";
export const id="dl_bd9db738b458487ba0ae";
export const url=new URL("../icons/lucid_3-navigation-2.svg?v=1bdbcebb4fb53ad3f31bd7957459ce729aa18de079c670e1208b16c5196bd146",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
