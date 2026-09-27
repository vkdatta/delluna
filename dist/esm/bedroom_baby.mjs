export const name="bedroom_baby";
export const id="dl_567e13e35b743ff5b053";
export const url=new URL("../icons/bedroom_baby.svg?v=a98c51f0bca53c4477527cc3768e2c97ea42ed7f9c6cf9dd1fc5f586c657a2eb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
