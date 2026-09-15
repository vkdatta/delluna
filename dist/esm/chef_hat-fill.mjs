export const name="chef_hat-fill";
export const id="dl_050759c1c66144269440";
export const url=new URL("../icons/C/chef_hat-fill.svg?v=04ec8ccc83a04265a4039971ab98b536c6443c5f14527a045b9d92c5b87582b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
