export const name="warning-octagon-light";
export const id="dl_f78950cf8d734598abb9";
export const url=new URL("../icons/W/warning-octagon-light.svg?v=ca7ced4ace6b1d491cac7201bac836c9980010a59919cd9b4a119314af5233d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
