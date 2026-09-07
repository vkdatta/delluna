export const name="shopping-bag-light";
export const id="dl_1d62c7086240474f8f44";
export const url=new URL("../icons/S/shopping-bag-light.svg?v=e2b4611ae52a8c474bb2d49d691849278202d5780da2fb9321352a545ebbff17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
