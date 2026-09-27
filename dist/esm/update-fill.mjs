export const name="update-fill";
export const id="dl_5c488ef79821f02529bf";
export const url=new URL("../icons/update-fill.svg?v=eb58549fa276601c1c5dd2719e3ca7cd4c383f6ae520076f5cc69c9e47febf91",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
