export const name="lucid_3-package-minus";
export const id="dl_6079f666a10442a2809d";
export const url=new URL("../icons/lucid_3-package-minus.svg?v=a474868568a26de356d0c65bfcd8e4e525c462416e8096212e516ea778edc922",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
