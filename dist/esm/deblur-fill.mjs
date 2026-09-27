export const name="deblur-fill";
export const id="dl_f5a7f442167faabb2099";
export const url=new URL("../icons/deblur-fill.svg?v=44657ac8e9591086a7c1cec506ab07fb94dfd077f3ea80cfad13b18c77713836",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
