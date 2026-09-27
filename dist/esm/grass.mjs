export const name="grass";
export const id="dl_4317c7cc37755bc2b7e3";
export const url=new URL("../icons/grass.svg?v=50d35ad5497c0541961875840978929c49a133f9c4e64a4776be298e964ef1dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
