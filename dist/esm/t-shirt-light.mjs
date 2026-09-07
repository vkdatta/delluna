export const name="t-shirt-light";
export const id="dl_a121d0af258149cfac95";
export const url=new URL("../icons/T/t-shirt-light.svg?v=ba495471774e85e61fb217b0c4736dee091badae9721bfc6855d77582e719596",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
