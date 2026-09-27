export const name="model_training-fill";
export const id="dl_ea5a7397ca712e954bad";
export const url=new URL("../icons/model_training-fill.svg?v=b016aafc8c78eab71fbb7349b59ed25162e8a7be88f66679a81cb7e700abd271",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
