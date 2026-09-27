export const name="paragraph-duotone";
export const id="dl_953b90b0152b485f84f2";
export const url=new URL("../icons/paragraph-duotone.svg?v=0b3fbf822ac8ce3986eb5dd6e900c609d0660b4f5e2631fb6982f1357aa40e12",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
