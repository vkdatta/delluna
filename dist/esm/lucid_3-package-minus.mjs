export const name="lucid_3-package-minus";
export const id="dl_6079f666a10442a2809d";
export const url=new URL("../icons/lucid_3-package-minus.svg?v=5c88bfe94299c44479f909879ade3af30b1d05ce470b84d45a1e9e590c65febd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
