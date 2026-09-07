export const name="sign-out-duotone";
export const id="dl_f7fa7e4b8aba47079480";
export const url=new URL("../icons/S/sign-out-duotone.svg?v=4a44a628329ed8d4e17167610e27f289f1e068b27db1a5e8284415b0c245a6cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
