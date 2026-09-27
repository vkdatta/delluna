export const name="eye-closed-bold";
export const id="dl_872aba0139004478a739";
export const url=new URL("../icons/eye-closed-bold.svg?v=8eb635b6de3897b184f0f83f88f8f8e05dd073c45ff1fb568fa5bc0844c10b24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
