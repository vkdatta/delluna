export const name="cursor-light";
export const id="dl_21f3e8384c964453a283";
export const url=new URL("../icons/cursor-light.svg?v=d2664f9294f2e95b1cbd33444c13a97c419f113ee00334f86c54103186095359",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
