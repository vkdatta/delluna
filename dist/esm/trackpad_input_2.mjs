export const name="trackpad_input_2";
export const id="dl_0d24cf857618014d2627";
export const url=new URL("../icons/trackpad_input_2.svg?v=fb06e3cfff808992b033b943f898b60bc03019a00f03183855c798fe0b81e3be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
