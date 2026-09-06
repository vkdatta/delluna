export const name="chef-hat-thin";
export const id="dl_30d747ee525b4bdbaee2";
export const url=new URL("../icons/chef-hat-thin.svg?v=841d5979c72b1f6c70f9cc600e6658f31a42a2a1898ab8c50fe6684858247599",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
