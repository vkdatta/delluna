export const name="graphic_eq_off";
export const id="dl_00ea68cb4ad9c053a923";
export const url=new URL("../icons/graphic_eq_off.svg?v=c7988cdc1cd625d2ffc59f1bb42d39032cba317e1bf76883c21d8ebcb00063f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
