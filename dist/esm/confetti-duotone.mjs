export const name="confetti-duotone";
export const id="dl_059d55145bc64c7fa54b";
export const url=new URL("../icons/confetti-duotone.svg?v=635f8554d2f230cc11459700d7a85b9437818dda1460d89743308e476c37bec9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
