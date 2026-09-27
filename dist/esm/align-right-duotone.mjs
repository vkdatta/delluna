export const name="align-right-duotone";
export const id="dl_d598bd3daa554aba94d3";
export const url=new URL("../icons/align-right-duotone.svg?v=ae169005477acd93f70fe92603e972bc390bfad96ce796cb499ecb5527060ce7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
