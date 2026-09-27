export const name="arrow-bend-up-right-duotone";
export const id="dl_b5173a8e464746e8883f";
export const url=new URL("../icons/arrow-bend-up-right-duotone.svg?v=43b1f02430625a00ff35cd8ff1f8efbb7c0655bbba14416b3529894e6d15b590",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
