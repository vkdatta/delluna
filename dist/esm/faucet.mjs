export const name="faucet";
export const id="dl_39a7f3d76b4339916dd5";
export const url=new URL("../icons/faucet.svg?v=55961d5053dcfe258b32b836c9014e774d645c5587fc4cb98602480b093ec960",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
