export const name="eyeglasses_2";
export const id="dl_ab899df57aa41276bfc1";
export const url=new URL("../icons/eyeglasses_2.svg?v=c279e51fcd36d93e4a8fda30b4b7b3692dfb6a24634429d67e2a33fc7a7e6621",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
