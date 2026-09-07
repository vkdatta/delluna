export const name="skype-logo-light";
export const id="dl_1d0db18bc9b34d3cb738";
export const url=new URL("../icons/S/skype-logo-light.svg?v=c7500435dc3b8762707f62d1cf37df46fcece9b9b92fcda4f97683e9ea82ddc5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
