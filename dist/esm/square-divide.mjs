export const name="square-divide";
export const id="dl_4dbb1f0b2e99429799c7";
export const url=new URL("../icons/square-divide.svg?v=d4cf4c8a4f3404fd68cecb0354916a838a7d259d59a24c96a41a24edf47d2f55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
