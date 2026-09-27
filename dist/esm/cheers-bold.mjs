export const name="cheers-bold";
export const id="dl_d975f5c953aa4d8c8173";
export const url=new URL("../icons/cheers-bold.svg?v=d67eba2e3e47c2365810887fbed83cb68cde40c512ebba46050d60978b1104b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
